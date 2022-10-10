import React from 'react'

export default function GeneralSection({generalInfo,setGeneralInfo}) {
  return (
    <div className="bg-1 info-container">
      <h2>General</h2>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="tel" placeholder='Phone'/>
      </form>
    </div>
  )
}
