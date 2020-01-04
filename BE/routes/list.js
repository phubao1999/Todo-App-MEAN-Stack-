const express = require('express');
const router = express.Router();
const List = require("../models/List");

// Get All Item
router.get("/", async (req, res) => {
    try {
        const item = await List.find();
        res.json(item);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {
    const item = new List({
        title: req.body.title,
        isDone: false
    });
    try {
        const saveItem = await item.save();
        res.json(saveItem);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;