const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()


const userSchema = new Schema({
    name: { type: String, required: true },
    surname: {
        type: String,
        required: true,
    },
});

const users = mongoose.model('Users', userSchema);

router.get('/', async (req, res) => {
    try {
        const user = await users.find()
        return res.send({ success: true, data: user });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await users.create({ ...req.body })
        return res.send({ success: true, data: user });
    } catch (err) {
        res.send({ success: false, error: err });
    }

})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await users.findByIdAndUpdate(id, { ...req.body })
        return res.send({ success: true, data: user });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        await users.findByIdAndDelete(id)
        return res.send({ success: true });
    } catch (err) {
        res.send({ success: false, error: err });
    }
})

module.exports = router;
