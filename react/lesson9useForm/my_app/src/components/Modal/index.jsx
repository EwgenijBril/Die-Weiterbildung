import React from 'react'
import s from './index.module.css'
import FormItem from '../FormItem'

export default function Modal({modal, setModal}) {
  return (
    <div className={[s.modal, modal ? s.active : ''].join(' ')}>
        <div className={s.modal_content}>
        <FormItem 
      title={'Registration'}
      button={{submit: 'Registration', redirect: 'Login'}}
      info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters'}
      form_type={'registration'}
      />
        </div>
    </div>
  )
}
