

import admin from "firebase-admin" 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const serviceAccount = require("../../serviceAccountkey.json");

let isConnected = false


export const connectToDb = async () => {
    if(isConnected) {
        console.log("Database is already connected")
        return;
    }

    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })

        isConnected = true
        console.log("Database connected successfully")
    } catch (err) {
        console.error("Error connecting to database", err.message)
    }
}

export const db = () => admin.firestore();