import * as mongoose from "mongoose";

const users_schema = new mongoose.Schema({
    FirstName:{
        type:mongoose.Schema.Types.String,
    },
    LastName:{
        type:mongoose.Schema.Types.String,
    },
    Email:{
        type:mongoose.Schema.Types.String,
    },
    Password:{
        type:mongoose.Schema.Types.String,
    },
    Phone_no :{
        type:mongoose.Schema.Types.String,
    },
},
{
    timestamps:true,
    versionKey:true
}
)

const User_Model = mongoose.model("users" , users_schema)

export default User_Model;