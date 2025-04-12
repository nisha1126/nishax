import "./database.js"
import {PostModule1}  from "./models.js"
import Posts from "./Posts.json" with {type:"json"}
PostModule1.insertMany(Posts).then(()=>{
    console.log("Inserted Successfully")
}).catch(error=>{
    console.error("Insert failed",error)
})