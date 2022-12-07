import React from 'react'
import s from './index.module.css'
import { useForm} from 'react-hook-form'

export default function ContactsForm() {

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onBlur'
  });

  const submit = data => console.log(data);

  const firstnameRegister = register('firstname',{
    required: 'Field "firstname" is required'
  });
  const lastnameRegister = register('lastname', {
    required: 'Field "lastname" is required'
  });
  const messageRegister = register('message', {
    required: 'Field "message" is required'
  });
  return (
    <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>Name</p>
          <input 
          type="text"  
          name='firstname' 
          placeholder='Ivan' {...firstnameRegister}/>
          {errors.firstname && <p>{errors.firstname?.message}</p> }
        </label>

        <label>
          <p>Lastname</p>
          <input 
          type="text"  
          name='lastname' 
          placeholder='Ivanov' {...lastnameRegister}/>
          {errors.lastname && <p>{errors.lastname?.message}</p> }
        </label>
      </div>

      <label>
        <p>Message</p>
        <textarea 
        type="text" 
        name='message' 
        placeholder='Your massage' 
        {...messageRegister}/>
        {errors.message && <p>{errors.message?.message}</p> }
      </label>

      <button>Send Massage</button>


    </form>
  )
}
