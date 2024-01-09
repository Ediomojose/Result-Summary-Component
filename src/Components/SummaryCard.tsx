import React from 'react'
import '../Assets/CSS/SummaryComponent.css'
import SummaryData from "../Data/SummaryData"

const SummaryCard = () => {
  return (
    <>
    <main className='card--body'>
        <section className='result--container'>
          <p className="result--text">Your result</p>
          <aside className='score--board'>
            <h1 className='result--value'>85</h1>
            <p className='result--total'>of 100</p>
          </aside>
          <div className="remark--container">
            <h2 className='remark'>Great</h2>
            <p className="full--remark">
              You scored higher than 85% of people who took this test.
            </p>
          </div>
        </section>
        <section className='summary--container'>
          <h1 className='header'>Summary</h1>
          <ul>
            {
              SummaryData.map((item, idx)=>(
                <li key={idx}>
                  <div>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <div>
                    <span>{item.score}</span>
                    <span>/</span>
                    <span>100</span>
                  </div>
                </li>
              ))
            }
          </ul>
          <button type="button">Continue</button>
        </section>
    </main>
    </>
  )
}



export default SummaryCard