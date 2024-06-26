module.exports = app => {
    const workers = require("../controllers/worker.controller.js");

    var router = require("express").Router();

    // Create a new worker
    router.post("/", workers.create);

    // Retrieve all workers
    router.get("/", workers.findAll);

    // Retrieve all published worker
    router.get("/search", workers.findAllPublished);

    // Retrieve a single worker with id
    router.get("/:id", workers.findOne);

    // Update a worker with id
    router.put("/:id", workers.update);

    // Delete a worker with id
    router.delete("/:id", workers.delete);

    // Create a new worker
    router.delete("/", workers.deleteAll);

    app.use('/api/workers', router);
};