import {Router} from "express";

const rutacanal = Router();

rutacanal.get("/", (req, res) => {
    res.json({ "aplicacion": "meet"})
});

rutacanal.get("/canal", (req, res) => {
    res.json({
        "msg":"hola mundo",
        "user": "carlos",
        "aplicacion": "meet",
        "type": "Backend"

    })
});


export default rutacanal;
