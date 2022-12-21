const express = require('express')
const router = express.Router()

router.post("/", async(req, res)=>{
    res.send("add pet (admin only)")
})
//link matching routes
router.get("/", async(req, res)=>{
    res.send("get pets")
})

router.get("/:id", async(req, res)=>{
    res.send("get pet by id")
})

router.put("/:id", async(req, res)=>{
    res.send("edit pet by id (admin only)")
})

router.post("/:id/adopt", async(req, res)=>{
    res.send("adopt/ foster (logged in user only)")
})

router.post("/:id/return", async(req, res)=>{
    res.send("return pet (logged in user only)")
})

router.post("/:id/save", async(req, res)=>{
    res.send("save pet (logged in user only)")
})

router.delete("/:id/save", async(req, res)=>{
    res.send("delete saved pet (logged in user only)")
})

router.get("/user/:id", async(req, res)=>{
    res.send("get pet by user's id")
})

module.exports = router;