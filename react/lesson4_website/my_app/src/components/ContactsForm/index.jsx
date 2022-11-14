import React from 'react'
import s from './index.module.css'

export default function ContactsForm() {
  return (
    <form className={s.contacts_form}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>Name</p>
          <input type="text"  name='firstname' placeholder='Ivan'/>
        </label>

        <label>
          <p>Lastname</p>
          <input type="text"  name='lastname' placeholder='Ivanov'/>
        </label>
      </div>

      <label>
        <p>Massage</p>
        <textarea type="text"  name='massage' placeholder='Your massage'/>
      </label>

      <button>Send Massage</button>


    </form>
  )
}
