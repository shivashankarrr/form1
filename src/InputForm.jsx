import React from 'react'

function InputForm(props) {
    const {submitForm} = props
  return (
        <div className='flex flex-row justify-center items-center'>
        <form className='flex flex-col m-10 p-10 rounded-md' onSubmit={submitForm}>
          <label htmlFor='name' className='font-sans font-semibold text-lg'>Name</label>
          <input type='text' placeholder='Name' id="name" required className='p-2 rounded-sm outline-none border-2 w-96'/>
          <label htmlFor='email' className='font-sans font-semibold text-lg'>Email</label>
          <input type='text' placeholder='Email' id="email" required className='p-2 rounded-sm outline-none border-2'/>
          <label htmlFor='message' className='font-sans font-semibold text-lg'  border-2>Message</label>
          <textarea placeholder='Message' id="message" required className='p-2 rounded-sm outline-none border-2'/>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2'>Submit</button>
        </form>
      </div>
    
  )
}

export default InputForm