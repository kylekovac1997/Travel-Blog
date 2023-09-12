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
const fs_1 = __importDefault(require("fs"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID; // Fixed typo
const REDIRECT_URI = process.env.REDIRECT_URI;
const SCOPES = process.env.SCOPES;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server file upload tesst');
});
app.get("/login", (req, res) => {
    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&response_mode=query&scope=${SCOPES}`;
    res.redirect(authUrl);
});
app.get('/callback', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.query;
        console.log("Received code:", code);
        console.log("Query parameters:", req.query);
        const tokenResponse = yield axios_1.default.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', `client_id=${CLIENT_ID}&scope=${SCOPES}&code=${code}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code&client_secret=${CLIENT_SECRET}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const { access_token } = tokenResponse.data;
        // Upload an image to OneDrive
        const filePath = 'wallpaperflare-cropped.jpg';
        const fileContent = fs_1.default.readFileSync(filePath);
        const uploadResponse = yield axios_1.default.put('https://graph.microsoft.com/v1.0/me/drive/root:/my_image.jpg:/content', fileContent, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'image/jpeg'
            }
        });
        console.log("Access Token:", access_token);
        res.json(uploadResponse.data);
    }
    catch (error) {
        console.error("Error in /callback:", error.response ? error.response.data : error.message);
        res.status(500).send("Internal Server Error");
    }
}));
console.log(`Redirect URI: ${REDIRECT_URI}`);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
