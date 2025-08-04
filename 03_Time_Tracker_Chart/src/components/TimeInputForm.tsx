import React, { useState } from 'react'
import {Button} from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Props{
    onAdd: (activity:string, hours:number) =>void;
}

function TimeInputForm({onAdd}:Props) {

    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");

    const handleSubmit =()=>{
        if(!activity.trim || !hours) {
            alert('Please fill it')
            return
        }
        onAdd(activity, Number(hours))
            setActivity("")
            setHours("")
    }
  return (
    <div className='space-y-4'>
 
        <Input
        type='text'
        placeholder='Activity ( e.g Read )'
        value={activity}
        onChange={(e)=> setActivity(e.target.value)}  />

        <Input
        type='text'
        placeholder='Hours ( e.g 2 )'
        value={hours}
        onChange={(e)=> setHours(e.target.value)}  />

        <Button className='w-full' onClick={handleSubmit}>
            Add Activity
        </Button>
     
    </div>

  )
}

export default TimeInputForm