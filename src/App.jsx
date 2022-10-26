import { useState } from 'react'
import Intro from './Intro'
import ThankYou from './ThankYou'

function App() {
  const [isRated, setIsRated] = useState(false)
  const [rate, setRate] = useState(0)

  return (
    <div className='font-Overpass font-normal bg-[#121417] min-h-screen text-white text-sm flex flex-col justify-center items-center'>
      {isRated ? (
        <ThankYou rate={rate} />
      ) : (
        <Intro setIsRated={setIsRated} setRate={setRate} rate={rate} />
      )}
    </div>
  )
}

export default App
