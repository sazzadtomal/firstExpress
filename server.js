const express=require("express")


const app=express();

const PORT=3000;


const friends=[
    {
        id:0,
        name:"tomal"
    },
    {
        id:1,
        name:"tanveer"
    },
]


app.get("/",(req,res)=>{

    res.send({id:4, name:"tomal"})
})
app.get("/messages",(req,res)=>{

    res.send("<ul><li>Albert</li></ul>")
})

app.get("/friends/:friendId",(req,res)=>{
   
     const id=req.params.friendId;
     const friend=friends[id]

     if(friend){
        res.json(friend)
     }

     else{
        res.status(404).json({message:"not found"})
     }




})



app.post("/messages",(req,res)=>{

    console.log("updating messages")
})






app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})