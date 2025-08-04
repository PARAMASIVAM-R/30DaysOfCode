import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as chartjs, ArcElement, Tooltip, Legend } from 'chart.js'

chartjs.register(ArcElement, Tooltip, Legend)
interface Props{
  data : { activity: string; hours: number }[]
}

function TimeChart({data}:Props) {
  console.log('data', data)
  const chartData = {
    labels : data.map(d => d.activity),
    datasets: [
      {
        label: 'Hours',
        data : data.map(d => d.hours),
        backgroundColor: ['#DC2626', '#2563EB', '#059669', '#CA8A04', '#7C3AED'],
        borderWidth: 1,
      }
    ]
  }

  return <Pie data={chartData}/>
}

export default TimeChart