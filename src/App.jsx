import React from 'react'
import Questions from './Questions'
import './styles.css'

function App() {
 
  return (
    <main className="main-container">
      <div className="faq-title">
        <img src="../faq-accordion-main/assets/images/icon-star.svg" alt="star" />
        <h1>FAQs</h1>
      </div>
      <Questions />
    </main>
  )
}

export default App
