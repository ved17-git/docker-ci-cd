import express from 'express'
import cors from 'cors'
import { prismaClient } from 'db/client'

const app=express()
const port=8000

app.use(cors())
app.use(express.json())

const random="abcdefghijklmnopqustuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234556789"

app.get('/', async(req,res)=>{
   
    const users=await prismaClient.user.findMany()
    res.json({
        msg:"users",
        users
    })
})

app.post('/', async (req,res)=>{

    let randomStr=""
    for(let i=0; i<=6; i++){
        const rnd=Math.round(Math.random()*random.length)
        randomStr+=random[rnd]
    }
    const email=randomStr+"@gmail.com"
    const password=randomStr
     
    const user=await prismaClient.user.create({
        data:{
            email:email,
            password:password
        }
    })
    res.json({
        msg:"user created",
        user
    })

})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})