import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
<HashRouter>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/contact" exact element={<ContactPage/>} />
        <Route path="/passeur" exact element={<TopAssistPage/>} />
        <Route path="/buteur" exact element={<TopScorerPage/>} />
        <Route path="/admin" exact element={<AdminPage/>} />
        <Route path="*" exact element={ <NotFoundPage/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
