require('dotenv').config();

const express = require('express');
const MemoryModel = require('./model');

const router = express.Router()

module.exports = router;

// A simple auth function
function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === process.env.API_PASSWORD) {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

// List all memories
router.get('/memories', isAuth, async (req, res) => {
    try{
        const data = await MemoryModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// List all approved memories
router.get('/memories/approved', isAuth, async (req, res) => {
    try{
        const data = await MemoryModel.find({"approved": true});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get a memory by ID
router.get('/memories/:id', isAuth, async (req, res) => {
    try{
        const data = await MemoryModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Create a memory
router.post('/memories', isAuth, async (req, res) => {
    const data = new MemoryModel({
        name: req.body.name,
        comment: req.body.comment,
        approved: false,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Approve a memory by ID
router.patch('/memories/:id/approve', isAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = {
            approved: true,
        };
        const options = { new: true };

        const result = await MemoryModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Delete a memory by ID
router.delete('/memories/:id', isAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await MemoryModel.findByIdAndDelete(id)
        res.send(`Memory with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})