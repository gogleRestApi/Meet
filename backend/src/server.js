import express from "express";
import ruta from "./routes/index.js";




const server = express();


server.set("port", process.env.PORT || 9010);
server.use("/", ruta);


export default server;