import React, { useState } from 'react'

import { Form } from './Signup.styles'



function SignUp() {

  const [Data, setData] = useState({
    firstname: "", lastname: "", email: "", phone: "",
    comment: ""
  })






  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prevData => {
      return {
        ...prevData,
        [name]: value,

      }
    })
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(Data)
  }


 

  return (
    <div >
      <div style={{
        textAlign: "center",
        // margin: "8px 0",
        background:"white"
      }}>
        <h2>Welcome  </h2>
        <p>Create An Account</p>
      </div>


      <Form style={{
        background: "rgba(34, 177, 141, 0.883)", width: "500px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
      }}>



        <div className='firstname'>
          <input type="text" placeholder='firstname' onChange={handleChange} name='firstname' value={Data.firstname} />
        </div>

        <div className='lastname'>
          <input type="text" className='lastname' placeholder='lastname' onChange={handleChange} name='lastname' value={Data.lastname} />
        </div>

        <div className='email'>
          <input type="email" placeholder='email' onChange={handleChange} name='email' value={Data.email} />
        </div>

        <div className='phone'>
          <input type="tel" placeholder='phone' onChange={handleChange} name='phone' value={Data.phone} />
        </div>

        <div className='text'>
          <textarea name="comment" value={Data.textarea} onChange={handleChange} placeholder="discuss" required></textarea>
        </div>

        <button type="submit" onClick={submit}>submit</button>
      </Form>


    </div>


  )
}

export default SignUp
