import React from 'react'

export default function SubmissionPage({setCompleted,setSubmit, setGeneralInfo, setEducationInfo,setPracticalInfo}) {
  const handleRefresh = () => {
    setCompleted(false);
    setSubmit(false)
    setGeneralInfo({
      name: "",
    email: "",
    phone: ""
    })
    setEducationInfo({
      name: "",
    study: "",
    studyYear: ""
    })
    setPracticalInfo({
      name: "",
    position: "",
    occupationDates: ""
    })
  }
  return (
    <div className="submission-page">
      <h1>Thanks for submitting your application! We will be in contact soon.</h1>
      <button onClick={handleRefresh}>Home</button>
    </div>
  )
}
