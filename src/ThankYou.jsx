import React from 'react'
import thankYou from './assets/illustration-thank-you.svg'

const ThankYou = ({ rate }) => {
  return (
    <div className='bg-[#252d37] max-w-[25rem] p-[2rem] rounded-2xl flex flex-col justify-evenly align-middle items-center'>
      <div>
        <img src={thankYou} alt='Thank you' className='pb-[1rem]' />
      </div>
      <div className='bg-[#7c8798] mb-[1rem] rounded-2xl'>
        <p className='p-[0.5rem] text-[#fb7413] '>
          You selected {rate} out of 5
        </p>
      </div>
      <p className='pb-[1rem] text-2xl text-bold'>Thank you!</p>
      <p className='text-normal text-[#7c8798] text-center'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYou
