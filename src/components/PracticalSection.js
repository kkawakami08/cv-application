import React from 'react'

export default function PracticalSection({practicalInfo, setPracticalInfo}) {
  return (
    <div className="bg-1 info-container">
      <h2>Practical Experience</h2>
      <form>
        <input type="text" placeholder='Company Name' value={practicalInfo.name}
        onChange={(e)=> {
          setPracticalInfo({...practicalInfo, name:e.target.value})}}/>
        <input type="text" placeholder='Position Title' value={practicalInfo.position}
        onChange={(e)=> {
          setPracticalInfo({...practicalInfo, position:e.target.value})}}/>
        <input type="text" placeholder='Dates of Occupation' value={practicalInfo.occupationDates}
        onChange={(e)=> {
          setPracticalInfo({...practicalInfo, occupationDates:e.target.value})}}/>
      </form>
    </div>
  )
}
