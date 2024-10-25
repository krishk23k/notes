import * as mongoose from "mongoose";
import User_Model from "../model/users";

export class userUtils{
    public newUser = async(data:any)=>{
        const result = await User_Model.insertMany(data);
        return result;
    }
}