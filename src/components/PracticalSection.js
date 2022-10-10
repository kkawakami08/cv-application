import React from 'react'

export default function PracticalSection({practialInfo, setPracticalInfo}) {
  return (
    <div className="bg-1 info-container">
      <h2>Practical Experience</h2>
      <form>
        <input type="text" placeholder='Company Name'/>
        <input type="text" placeholder='Position Title'/>
        <input type="text" placeholder='Dates of Occupation'/>
      </form>
    </div>
  )
}
