import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Button from './components/Button.jsx'
import Profile from './components/Profile.jsx'
import OfferSection from "./components/OfferSection.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Button />
    <Button />
    <Profile />
    <Profile />
    <Profile /> */}

    <OfferSection />
  </React.StrictMode>,
)
