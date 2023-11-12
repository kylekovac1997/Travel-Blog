import express from "express";
const router = express.Router();
import  {getDestinations} from "../controllers/destinations/GetDestinations"

router.get("/GetDestinations", getDestinations);

export default router;