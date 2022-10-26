import React from 'react'
import iconStar from './assets/icon-star.svg'

const Intro = ({ setIsRated, setRate, rate }) => {
  const setRating = (value) => {
    setRate(value)
  }

  const submitRate = () => {
    if (rate > 0) {
      setIsRated(true)
    }
  }
  return (
    <div className='bg-[#252d37] max-w-[25rem] flex flex-col p-[1rem] rounded-2xl'>
      <div className='bg-[#7c8798] rounded-[50%] w-[2rem] h-[2rem] pl-[0.5rem] pt-[0.5rem] mb-[1rem]'>
        <img src={iconStar} alt='star icon' />
      </div>
      <h1 className='font-bold text-2xl'>How did we do?</h1>
      <div className='text-[#959eac]'>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className=' text-white text-normal text-center flex flex-row justify-center mt-[1rem]'>
          <div
            className='hover:cursor-pointer bg-[#7c8798] rounded-[50%] min-w-[2rem] min-h-[2rem] mx-[1rem] pt-[0.5rem]'
            onClick={() => setRating(1)}
          >
            1
          </div>
          <div
            className='hover:cursor-pointer bg-[#7c8798] rounded-[50%] min-w-[2rem] min-h-[2rem] mx-[1rem] pt-[0.5rem]'
            onClick={() => setRating(2)}
          >
            2
          </div>
          <div
            className='hover:cursor-pointer bg-[#7c8798] rounded-[50%] min-w-[2rem] min-h-[2rem] mx-[1rem] pt-[0.5rem]'
            onClick={() => setRating(3)}
          >
            3
          </div>
          <div
            className='hover:cursor-pointer bg-[#7c8798] rounded-[50%] min-w-[2rem] min-h-[2rem] mx-[1rem] pt-[0.5rem]'
            onClick={() => setRating(4)}
          >
            4
          </div>
          <div
            className='hover:cursor-pointer bg-[#7c8798] rounded-[50%] min-w-[2rem] min-h-[2rem] mx-[1rem] pt-[0.5rem]'
            onClick={() => setRating(5)}
          >
            5
          </div>
        </div>
        <div className='flex flex-row justify-center pt-[1rem] '>
          <button
            className='text-white bg-[#fb7413] w-full h-[2rem] rounded-2xl text-bold'
            onClick={() => submitRate()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro
