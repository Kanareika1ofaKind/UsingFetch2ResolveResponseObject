import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    function getCats() {
      fetch('http://localhost:3003/api/cats')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Ouch ${res.status}`) 
        }
        const type = res.headers.get('Content-Type')
        if (type.includes('application/json')) {
          debugger
        }
      })
      .catch(err => {
        console.log(`Problem GETing cats`, err); 
        debugger
      })
    }
    getCats()
  }, []) 
  return (
    <div>
      <h2>Hello, Cats!</h2>
    </div>
  )
}
