import TimeChart from '@/components/TimeChart';
import TimeInputForm from '@/components/TimeInputForm'
import React, { useState } from 'react'

function Home() {
  const [data, setData] = useState<{ activity: string; hours: number }[]>([])

  const handleAdd = (activity: string, hours: number) => {
    
    setData((prev)=> [...prev, {activity,hours}])
    console.log('data : ', data)
   
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-2xl shadow space-y-6'>
      <h1 className='text-2xl font-bold'>⌚ Time Tracker</h1>

      <TimeInputForm onAdd={handleAdd} />
      <TimeChart data={data}/>

    </div>
  )
}

export default Home
