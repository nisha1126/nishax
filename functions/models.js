import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  content:{
    type:String,
    required: true,
  },
  url:{
    type:String,
    required:true,
  },
});
export const PostModule=mongoose.model("Post",postSchema,"posts");