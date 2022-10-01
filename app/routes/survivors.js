module.exports = app => {
    const controller = require("../controllers/survivors.js");

    var router = require("express").Router();

    router.post("/add",controller.create)

    router.put("/update",controller.update)

    router.get("/getPercentage",controller.getPercentage)

    
    app.use('/api', router);
}