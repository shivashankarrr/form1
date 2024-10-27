import React from 'react'
import InputForm from './InputForm'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    
    const submitForm = event =>{
        event.preventDefault()
        return navigate('/success')
    }
    
  return (
    <>
    <InputForm submitForm={submitForm}></InputForm>
    </>
  )
}

export default Home