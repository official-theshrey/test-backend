const express = require('express')
const notemodel = require('./models/note.model')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

/**
 * post /api/notes
 * create new note and save data on mongodb
 * req.body = {title, desc}
 */
app.post("/api/notes",async(req,res)=>{
    const {title, desc} =req.body
    const note = await notemodel.create({
        title,desc
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})

/**
 * get /api/notes
 * fetch all the notes data from mongodb and send them in the response 
 */

app.get("/api/notes",async(req,res)=>{
   const notes = await notemodel.find()
   res.status(200).json({
    message:"notes fetch successfully.",
    notes
   })
})
/**
 * delete /api/notes/:id
 * delete note with the id from req.params
 */

app.delete('/api/notes/:id',async(req,res)=>{
    const id = req.params.id

    await notemodel.findByIdAndDelete(id)
    res.status(200).json({
        message:'note deleted successfully.'
    })
    
})

/**
 * patch /api/notes/:id
 * update the description of the note by id
 * req.body = {desc}
 */

app.patch("/api/notes/:id",async(req,res)=>{
    const  id = req.params.id
    const {desc} = req.body

   await notemodel.findByIdAndUpdate(id,{desc})
   res.status(200).json({
    message: "note update successfully"
   })
})

module.exports = app