import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const form = useForm();
  return (
    <div>
        <form>
            <label htmlFor='username'>Username</label>
            <input id="username" name="username" type="text" />
            <br/>
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" />
            <br/>
            <label htmlFor='password'>PassWord</label>
            <input id="password" name="password" type="password" />
        </form>
    </div>
  )
}

export default Form