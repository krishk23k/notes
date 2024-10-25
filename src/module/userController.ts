import {Request , Response} from "express"
import { userUtils } from "./userUtils";
import * as bcrypt from "bcrypt";

export class userController{
    public UserUtils = new userUtils();

    public newUser = async(req:Request , res:Response)=>{
        try{
            const{FirstName , LastName , Email , Password , Phone_no} = req.body;
            const password = await bcrypt.hash(Password , 10);
            const data = {
                FirstName:FirstName,
                LastName:LastName,
                Email:Email,
                Password:password,
                Phone_no:Phone_no
            }

            const result = await this.UserUtils.newUser(data);
            res.status(200).json({Message:"INSERT SUCCESSFUL"})

        }
        catch(error){
            console.log(">>>>>     NEW USER CONTROLLER     <<<<<" , error);
            res.status(400).json(error);
        }
    }

}