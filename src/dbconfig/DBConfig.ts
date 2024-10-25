import * as mongoose from "mongoose";

export class DBConfig{
    public connection(){
        const url = process.env.MONGO;
        const DB = mongoose.connect(`${url}`)
        .then(()=>{
            console.log("DATABASE CONNECTED");
        })
        .catch((error)=>{
            console.log("CONNECTION ERROR", error)
        })
    }
}