import './App.css';
import EducationSection from './components/EducationSection';
import GeneralSection from './components/GeneralSection';
import PracticalSection from './components/PracticalSection';
import React, {useState} from 'react';
import DisplayApplication from './components/DisplayApplication';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [educationInfo, setEducationInfo] = useState({
    name: "",
    study: "",
    studyYear: ""
  })
  const [practicalInfo, setPracticalInfo] = useState({
    name: "",
    position: "",
    occupationDates: ""
  })
  const [completed, setCompleted] = useState(false)

  const handleSubmit = (e) => {
    setCompleted(true);
  }
  return (
    <div>
      {completed ? (
      <div>
        <DisplayApplication generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} practicalInfo={practicalInfo} setPracticalInfo={setPracticalInfo} educationInfo={educationInfo} setEducationInfo={setEducationInfo} setCompleted={setCompleted}/>
      </div>) : (
        <div className="container">
          <h1>Application</h1>
        <GeneralSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
        <EducationSection educationInfo={educationInfo} setEducationInfo={setEducationInfo}/>
        <PracticalSection practicalInfo={practicalInfo} setPracticalInfo={setPracticalInfo}/>
        <button onClick={handleSubmit}>Review</button>
      </div>
      )}
    </div>
  );
}

export default App;
