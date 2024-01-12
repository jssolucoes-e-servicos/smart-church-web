'use client'
 
import { Fragment } from 'react';
import { useFormStatus } from 'react-dom'

type InputFormType = { type: string; name: string; placeholder: string; classname: string; defaultValue?:string;}

export function InputForm({ type, name, placeholder, classname, defaultValue = "" } : InputFormType) {
  const { pending } = useFormStatus()
 
  return (<Fragment>
    <input
      value={defaultValue}
      aria-disabled={pending}
      disabled={pending}
      type={type}
      name={name}
      placeholder={placeholder}
      className={classname}
      />
  </Fragment>)
}