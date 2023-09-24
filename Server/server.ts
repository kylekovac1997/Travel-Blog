import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import fileUpload, { UploadedFile } from 'express-fileupload'; // Imported UploadedFile
import axios from 'axios';
import cors from 'cors';

declare module 'express-session' {
  export interface SessionData {
    accessToken?: string;
  }
}

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPES = process.env.SCOPES;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.use(fileUpload());
app.use(cors({
  origin: 'http://localhost:5173',  // the frontend app's origin
  credentials: true
}));

app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if you're using HTTPS
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/login", (req: Request, res: Response) => {
  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&response_mode=query&scope=${SCOPES}`;
  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    const tokenResponse = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', 
      `client_id=${CLIENT_ID}&scope=${SCOPES}&code=${code as string}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}`, 
      {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const { access_token } = tokenResponse.data;
    req.session.accessToken = access_token;

    res.redirect('/upload');
  } catch (error) {
    console.error("Error in /callback:", error.response ? error.response.data : error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/upload', (req, res) => {
  if (req.session.accessToken) {
    res.redirect('http://localhost:5173/upload');
  } else {
    res.send("Please authenticate first.");
  }
});

app.get('/check-auth', (req, res) => {
  if (req.session.accessToken) {
      res.json({ isAuthenticated: true });
  } else {
      res.json({ isAuthenticated: false });
  }
});

app.post('/upload', async (req, res) => {
  if (!req.files || !req.files.uploadedFile) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.uploadedFile as UploadedFile;

  // Check if we have the access token in the session
  if (!req.session.accessToken) {
    return res.status(403).send("Not authenticated or session expired.");
  }

  // Send the file to OneDrive
  try {
    const response = await axios({
      method: 'PUT',
      url: `https://graph.microsoft.com/v1.0/me/drive/root:/${uploadedFile.name}:/content`, // Path to upload the file in OneDrive
      headers: {
        'Authorization': `Bearer ${req.session.accessToken}`,
        'Content-Type': uploadedFile.mimetype,
        'Content-Length': uploadedFile.size
      },
      data: uploadedFile.data // The file's data
    });

    if (response.status === 200 || response.status === 201) {
      res.send("File uploaded to OneDrive!");
    } else {
      console.error("OneDrive upload error:", response.data);
      res.status(500).send("Failed to upload to OneDrive.");
    }
  } catch (error) {
    console.error("Error uploading to OneDrive:", error.response ? error.response.data : error.message);
    res.status(500).send("Error uploading to OneDrive.");
  }
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
