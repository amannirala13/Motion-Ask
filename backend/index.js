import express from "express"
import {paths, routeMap} from "./router/index.js"
import {createServer} from "http";
import { Server } from "socket.io";
import {config} from "dotenv"
import OpenAI from "openai";

config();
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
const port = 4041
const app = express()
const server = createServer(app)
const io = new Server(server,{})

async function chat(input){

    const msg = [{role: "user", content: input}]

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: msg,
        temperature: 1.0
    })

    return response.choices[0].message.content;
}






for (const route in routeMap){
    app.post(route, routeMap[route])
}




app.post("/chime/:query", (req, res)=>{
    const question = req.params.query

    const promptTemplate = "You are a funny bot. Answer with sarcasm. \n Question: {question} \n Answer: "
    const prompt = promptTemplate.replace("{question}", question)

    chat(prompt).then(r=>{
        return res.send(r)
    }).catch(e=>{return res.send(e)})
})




io.on("connection", (socket) => {
    io.on("")
});




server.listen(port, "localhost",()=>{
    console.log(`Started listening on port ${port}`)
})