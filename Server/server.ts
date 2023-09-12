import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import fs from "fs";
import axios from 'axios';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID; // Fixed typo
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPES = process.env.SCOPES;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server file upload tesst');
});

app.get("/login", (req: Request, res: Response) => {
  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&response_mode=query&scope=${SCOPES}`;
  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    console.log("Received code:", code);
    console.log("Query parameters:", req.query);

    const tokenResponse = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', 
    `client_id=${CLIENT_ID}&scope=${SCOPES}&code=${code as string}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}`, 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
);

    const { access_token } = tokenResponse.data;

    // Upload an image to OneDrive
    const filePath = 'wallpaperflare-cropped.jpg';
    const fileContent = fs.readFileSync(filePath);

    const uploadResponse = await axios.put('https://graph.microsoft.com/v1.0/me/drive/root:/my_image.jpg:/content', fileContent, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'image/jpeg'
      }
    });
    console.log("Access Token:", access_token);

    res.json(uploadResponse.data);
  } catch (error) {
    console.error("Error in /callback:", error.response ? error.response.data : error.message);
    res.status(500).send("Internal Server Error");
}

});
console.log(`Redirect URI: ${REDIRECT_URI}`);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
