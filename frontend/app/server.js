import express from "express";





const server = express();


server.set("port", process.env.PORT || 9070);



export default server;