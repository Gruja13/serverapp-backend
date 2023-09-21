const express = require('express');
const router = express.Router();
const ServerModel = require('../models/server_model');

// POST: Create a new server
router.post('/create', async (req, res) => {
    try {
        const { serverNumber, serverStatus } = req.body;

        // Create a new server document
        const newServer = new ServerModel({
            serverNumber,
            serverStatus,
        });

        // Save the new server to the database
        await newServer.save();

        res.status(201).json(newServer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Retrieve the list of servers
router.get('/servers', async (req, res) => {
    try {
        // Query the database to fetch all servers
        const servers = await ServerModel.find();

        // Respond with the list of servers
        res.status(200).json(servers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// DELETE: Delete a server by its ID
router.delete('/servers/:id', async (req, res) => {
    try {
        const serverId = req.params.id;

        // Find and delete the server by its ID
        const deletedServer = await ServerModel.findByIdAndDelete(serverId);

        if (!deletedServer) {
            return res.status(404).json({ message: 'Server not found' });
        }

        // TODO: Deleted item should not be send
        res.status(200).json(deletedServer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;