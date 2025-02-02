import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Leaderboard from "@/scenes/leaderboard"
import Auth from "@/scenes/auth"
import Lobby from "@/scenes/lobby"
import Instructions from "@/scenes/instructions"
import Match from "@/scenes/match"
import Profile from "@/scenes/profile"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/leaderboard" element= {<Leaderboard/> } />
        <Route path="/auth" element= {<Auth/>} />
        <Route path="/lobby" element= {<Lobby/>} />
        <Route path="/instructions" element= {<Instructions/>} />
        <Route path="/match" element= {<Match />} />
        <Route path="/profile" element= {<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
