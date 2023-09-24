"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const express_fileupload_1 = __importDefault(require("express-fileupload")); // Imported UploadedFile
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPES = process.env.SCOPES;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
app.use((0, express_fileupload_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use((0, express_session_1.default)({
    secret: 'your-session-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if you're using HTTPS
}));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get("/login", (req, res) => {
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&response_mode=query&scope=${SCOPES}`;
    res.redirect(authUrl);
});
app.get('/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.query;
        const tokenResponse = yield axios_1.default.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', `client_id=${CLIENT_ID}&scope=${SCOPES}&code=${code}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const { access_token } = tokenResponse.data;
        req.session.accessToken = access_token;
        res.redirect('/upload');
    }
    catch (error) {
        console.error("Error in /callback:", error.response ? error.response.data : error.message);
        res.status(500).send("Internal Server Error");
    }
}));
app.get('/upload', (req, res) => {
    if (req.session.accessToken) {
        res.redirect('http://localhost:5173/upload');
    }
    else {
        res.send("Please authenticate first.");
    }
});
app.get('/check-auth', (req, res) => {
    if (req.session.accessToken) {
        res.json({ isAuthenticated: true });
    }
    else {
        res.json({ isAuthenticated: false });
    }
});
app.post('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || !req.files.uploadedFile) {
        return res.status(400).send('No files were uploaded.');
    }
    const uploadedFile = req.files.uploadedFile;
    // Check if we have the access token in the session
    if (!req.session.accessToken) {
        return res.status(403).send("Not authenticated or session expired.");
    }
    // Send the file to OneDrive
    try {
        const response = yield (0, axios_1.default)({
            method: 'PUT',
            url: `https://graph.microsoft.com/v1.0/me/drive/root:/${uploadedFile.name}:/content`,
            headers: {
                'Authorization': `Bearer ${req.session.accessToken}`,
                'Content-Type': uploadedFile.mimetype,
                'Content-Length': uploadedFile.size
            },
            data: uploadedFile.data // The file's data
        });
        if (response.status === 200 || response.status === 201) {
            res.send("File uploaded to OneDrive!");
        }
        else {
            console.error("OneDrive upload error:", response.data);
            res.status(500).send("Failed to upload to OneDrive.");
        }
    }
    catch (error) {
        console.error("Error uploading to OneDrive:", error.response ? error.response.data : error.message);
        res.status(500).send("Error uploading to OneDrive.");
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
