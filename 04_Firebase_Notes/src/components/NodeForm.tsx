import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const NodeForm = () => {

    const [note, setNote] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit =async ()=>{
       if(!note.trim()){
        alert('Please fill the note !')
       }
        
       setLoading(true)
       await addDoc(collection(db, "notes"), {
        content: note,
        createdAt: serverTimestamp()
       })

       setNote("")
       setLoading(false)
    }

  return (
    <div>
        <Input
        placeholder='Type here...'
        value={note}
        maxLength={50}
        onChange={(e) => setNote(e.target.value)}
        />

        <Button className='w-full mt-4'
        onClick={handleSubmit}
        disabled={loading}>
            {loading ? "Saving..." : "Save"}
        </Button>
    </div>
  )
}

export default NodeForm