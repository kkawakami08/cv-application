import React, {useState} from 'react'
import SubmissionPage from './SubmissionPage';


export default function DisplayApplication({setGeneralInfo, setEducationInfo, setPracticalInfo, generalInfo, educationInfo, practicalInfo, setCompleted}) {
  const [submit, setSubmit] = useState(false)

  const handleEdit = () => {
    setCompleted(false);
  }
  const handleSubmit = () => {
    setSubmit(true);
  }

  return (
    <div>
    {submit ? (
      <div>
       <SubmissionPage setCompleted={setCompleted} setSubmit={setSubmit} setGeneralInfo={setGeneralInfo} setEducationInfo={setEducationInfo} setPracticalInfo={setPracticalInfo}/>
      </div>) : (
      <div className="display-container">
      <h1>Review Application</h1>
      <div className="bg-1 info-container">
        <h2>General Info</h2>
        <div className="inline">
          <h4>Name:</h4>
        <p>{generalInfo.name}</p>
        </div>
        <div className="inline">
          <h4>Email:</h4>
        <p>{generalInfo.email}</p>
        </div>
        <div className="inline">
          <h4>Phone Number:</h4>
        <p>{generalInfo.phone}</p>
        </div>
      </div>

      <div className="bg-2 info-container">
        <h2>Education Info</h2>
        <div className="inline">
          <h4>School Name:</h4>
        <p>{educationInfo.name}</p>
        </div>
        <div className="inline">
          <h4>Degree:</h4>
        <p>{educationInfo.study}</p>
        </div>
        <div className="inline">
          <h4>Year of Degree:</h4>
        <p>{educationInfo.studyYear}</p>
        </div>
      </div>

      <div className="bg-1 info-container">
        <h2>Practical Info</h2>
        <div className="inline">
          <h4>Company Name:</h4>
        <p>{practicalInfo.name}</p>
        </div>
        <div className="inline">
          <h4>Position:</h4>
        <p>{practicalInfo.position}</p>
        </div>
        <div className="inline">
          <h4>Years of Occupation:</h4>
        <p>{practicalInfo.occupationDates}</p>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleSubmit}>Send</button>
      </div>
      
    </div>
    )}
    </div>
    
  )
}
