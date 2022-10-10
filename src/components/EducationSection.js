import React from 'react'

export default function EducationSection({educationInfo, setEducationInfo}) {
  return (
    <div className="bg-2 info-container">
      <h2>Education</h2>
      <form>
        <input type="text" placeholder='School Name' value={educationInfo.name}
        onChange={(e)=> {
          setEducationInfo({...educationInfo, name:e.target.value})}}/>
        <input type="text" placeholder='Degree' value={educationInfo.study}
        onChange={(e)=> {
          setEducationInfo({...educationInfo, study:e.target.value})}}/>
        <input type="text" placeholder='Year of Degree' value={educationInfo.studyYear}
        onChange={(e)=> {
          setEducationInfo({...educationInfo, studyYear:e.target.value})}}/>
      </form>
    </div>
  )
}
