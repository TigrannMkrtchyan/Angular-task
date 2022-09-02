const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()

const cardSchema = new Schema({
    number: { type: Number, required: true },
});

const cards = mongoose.model('cards', cardSchema);

router.get('/', async (req, res) => {
    try {
        const card = await cards.find()
        return res.send({ success: true, data: card });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})

router.post('/', async (req, res) => {
    try {
        const card = await cards.create({ ...req.body })
        return res.send({ success: true, data: card });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})


router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        await cards.findByIdAndDelete(id)
        return res.send({ success: true });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})

module.exports = router;
