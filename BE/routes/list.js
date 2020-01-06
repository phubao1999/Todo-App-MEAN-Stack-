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

// Post New Item
router.post('/', async (req, res) => {
    const item = new List({
        title: req.body.title,
        isDone: false,
        description: req.body.description
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

// Delete Item
router.delete('/:itemId', async (req, res) => {
    try {
        const id = await List.remove({ _id: req.params.itemId });
        res.json(id);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Change Item
router.put('/:itemId', async (req, res) => {
    try {
        const updated = await List.findOneAndUpdate(
            { _id: req.params.itemId },
            { 
                $set: {
                    title: req.body.title,
                    isDone: req.body.isDone,
                    description: req.body.description
                } 
            },
            { useFindAndModify: false }
        );
        res.json(updated);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;