import React from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

type Props ={
  subject: string,
  footer: string,
  onReset: ()=> void
}

function MoodOutput({subject, footer, onReset}:Props) {
  return (
    <div className='space-y-5'>
      <div>
        <label className='block font-medium' htmlFor="">Subject : </label>
        <Input value={subject} readOnly />
      </div>

      <div>
        <label className='block font-medium' htmlFor="">Footer Signature : </label>
        <Textarea value={footer} readOnly />
      </div>

      <Button className='w-full'
      variant='destructive'
      onClick={onReset}
     >
      Reset
     </Button>

    </div>
  )
}

export default MoodOutput