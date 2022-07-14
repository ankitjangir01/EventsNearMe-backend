require('dotenv').config();
const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get('/allevents', async (req, res) => {
    let success = false;
    try{
        const allevents = await Event.find({});
        success = true;
        res.json({success, allevents});
    }
    catch(err){
        res.status(400).json({ success: success, error: "no events found" });
    }
})


module.exports = router;