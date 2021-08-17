import React, { useState } from 'react'
import data from './data'
function App() {
  const [lorem, setLorem] = useState([])
  const [value, setValue] = useState(0)

  const generateLorem = (e) => {
    e.preventDefault()
    setLorem(data.filter((item, index) => index < value))
    console.log(lorem)
  }

  return (
    <>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form'>
          <label htmlFor='amount'>Paragraphs : </label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={value}
            onChange={(e) => {
              e.target.value > 0 ? setValue(e.target.value) : setValue(0)
            }}
          />
          <button className='btn' onClick={generateLorem}>
            generate
          </button>
        </form>
        <article className='lorem-text'>
          {lorem.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </article>
      </section>
    </>
  )
}

export default App
