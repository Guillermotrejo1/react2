import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft  } from "@fortawesome/free-solid-svg-icons"

library.add( faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft  )

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
