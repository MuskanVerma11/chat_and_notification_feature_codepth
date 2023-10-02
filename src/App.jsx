import React from 'react'
import Chat from './components/Chat'
import Landing from './components/Landing'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/chat" element={<Chat/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App