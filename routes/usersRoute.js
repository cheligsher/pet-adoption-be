const express = require("express")
const router = express.Router()

router.get('/', async (req, res) => {
    res.send("GET all users (admin only)")
    // admin only route!
})

router.get('/:id', async (req, res) => {
    res.send("GET user by id")
})

router.put('/:id', async (req, res) => {
    res.send("Update user (logged in user only)")
    //logged in user only
})

router.get('/:id/full', async (req, res) => {
    res.send("GET user by id")
})

module.exports = router;