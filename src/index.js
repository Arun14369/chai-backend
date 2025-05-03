// require('dotenv').config({path: './config.env' });
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import app from "./app.js";



dotenv.config({
    path: './config.env',
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT||6000);
    console.log(`Server running on port ${process.env.PORT}`);
})
.catch((error=>{
    console.log(`mongodb error: ${error} `);
}))