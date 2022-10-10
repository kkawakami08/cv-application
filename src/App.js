import './App.css';
import EducationSection from './components/EducationSection';
import GeneralSection from './components/GeneralSection';
import PracticalSection from './components/PracticalSection';

function App() {
  return (
    <div className="container">
      <GeneralSection />
      <EducationSection />
      <PracticalSection />
      <button>Submit</button>
    </div>
  );
}

export default App;
