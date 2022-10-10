import React from 'react'

export default function EducationSection({educationInfo, setEducationInfo}) {
  return (
    <div className="bg-2 info-container">
      <h2>Education</h2>
      <form>
        <input type="text" placeholder='School Name'/>
        <input type="text" placeholder='Degree'/>
        <input type="text" placeholder='Year of Degree'/>
      </form>
    </div>
  )
}
