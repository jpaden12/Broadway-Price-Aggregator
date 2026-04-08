import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import AllShows from "../AllShows/AllShows";
import Main from "../../components/Main/Main";



function App() {

  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
          <Route path="/home" element={<Main />} />
          <Route path="/allshows" element={<AllShows />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;