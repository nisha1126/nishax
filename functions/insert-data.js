import "./database.js"
import {PostModule1}  from "./models.js"
import posts from "./posts.json" with {type:"json"}
PostModule1.insertMany(posts).then(()=>{
    console.log("Inserted Successfully")
}).catch(error=>{
    console.error("Insert failed",error)
})