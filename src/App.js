import './App.css';
import EducationSection from './components/EducationSection';
import GeneralSection from './components/GeneralSection';
import PracticalSection from './components/PracticalSection';
import React, {useState} from 'react';
import DisplayApplication from './components/DisplayApplication';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Kaori",
    email: "@gmail",
    phone: "4444"
  })
  const [educationInfo, setEducationInfo] = useState({
    name: "cpp",
    study: "bio",
    studyYear: "2013"
  })
  const [practicalInfo, setPracticalInfo] = useState({
    name: "reju",
    position: "video",
    occupationDates: "10"
  })
  const [completed, setCompleted] = useState(true)

  return (
    <div>
      {completed ? (
      <div>
        <DisplayApplication generalInfo={generalInfo} practicalInfo={practicalInfo} educationInfo={educationInfo}/>
      </div>) : (
        <div className="container">
          <h1>Application</h1>
        <GeneralSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
        <EducationSection educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        <PracticalSection practicalInfo={practicalInfo} setPracticalInfo={setPracticalInfo}/>
        <button>Review</button>
      </div>
      )}
    </div>
  );
}

export default App;
