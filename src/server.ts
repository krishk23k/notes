import bodyParser from "body-parser";
import express from "express";
import {DBConfig} from "./dbconfig/DBConfig";
import dotenv from "dotenv";
dotenv.config();
export class server{
    protected app: express.Application;
    constructor(){
        this.app = express();
        const database = new DBConfig();
        database.connection();
        const port = process.env.PORT;
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
        this.app.listen(port , ()=>{
            console.log("App is Running on the port: ",port);
        })
    }
}