import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input  from '../Input'
import s from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'

export default function FormItem({title, button, info_text, form_type, info_text_2 }) {

    const {register, handleSubmit} = useForm();

    const submit = data => console.log(data)

    const emailRegister = register('email');
    const passwordRegister = register('password');

  return (
    <form onSubmit={ handleSubmit(submit) } className={s.form_item}>
        <CloseOutlined className={s.cross_icon} />
        <p className={ s.form_title }>{title}</p>

        <p className={s.form_descr}>{info_text_2}</p>

        <Input 
        type="text" 
        name='imail' 
        placeholder='Email' 
        { ...emailRegister } />

        {
          ['registration', 'login'].includes(form_type)
          ? <Input 
              type="text" 
              name='password' 
              placeholder='Password' 
              { ...passwordRegister } /> 
          : ''
        }

       

        <p className={ s.form_descr }> {info_text}</p>
        <Button color='yellow'>{button.submit}</Button>

        {
          ['registration', 'login'].includes(form_type)
          ? <Button color='white'>{button.redirect}</Button> 
          : ''
        }
        
       
    </form>
  )
}
