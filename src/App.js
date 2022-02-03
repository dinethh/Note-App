
// import './App.css';
import Navigation from './Navigation';
import AddNotes from './AddNotes';
import ViewNotes from './ViewNotes';
import { Routes, Route} from "react-router-dom";
function App() {
  return (
   <div>
     <Navigation />
     <Routes>
        <Route path="/" element={<AddNotes />} />
        <Route path="AddNotes" element={<AddNotes />} />
        <Route path="ViewNotes" element={<ViewNotes />} />
      </Routes>
  </div>
  );
}

export default App;
