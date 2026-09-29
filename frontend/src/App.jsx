import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [notes, setNotes] = useState([
  {
    title: "test title",
    desc: "test desc"
  },
  {
    title: "test title",
    desc: "test desc"
  },
  {
    title: "test title",
    desc: "test desc"
  },
  {
    title: "test title",
    desc: "test desc"
  },
])

 axios.get ('http://localhost:3000/api/notes')
  .then((res)=>{
     ///console.log(res.data.notes);
     setNotes(res.data.notes)
  
})
  return (

   <>
    <div className="notes">
      {
        notes.map((note)=>{
          return  <div className="note">
          <h1>{note.title}</h1>
          <p>{note.desc}</p>
        </div>
        })
      }
     
    </div>
   </>
   
 
  )
}

export default App