"use client";
import { Fragment } from "react";
import Link from "next/link";
import { RecoveryPaswordButton } from "@/components/buttons/recovery-password-button.component";
import { InputForm } from "@/components/elements/input-form.component";
import { recoveryPasswordAction } from "@/actions/auth/recovery-password.action";
import toast from "react-hot-toast";

import { z } from 'zod';
 
const schema = z.object({
  email: z.string({
      required_error: "Usuário é Obrigatório",
      invalid_type_error: 'Usuário não válido',
    }).trim().toLowerCase(),
  churchId: z.string({
    invalid_type_error: 'Erro interno: E-110',
  }),
  app: z.string({
    invalid_type_error: 'Erro interno: E-111',
  }),
})

export default function RecoveryPasswordForm() {
 

  async function handleRecoveryPassword(formData: FormData) {

    const validatedFields = schema.safeParse({
      email: formData.get('username'),
      churchId: 'igreja_viva',
      app:'web'
    })  
    if (!validatedFields.success) {
      const error = validatedFields.error.flatten().fieldErrors;
      console.log(error)
      return {
        error:error
      }
      
    } else {
      const result = await recoveryPasswordAction(validatedFields.data)
      if(result?.error){
        toast.error(result?.error);
      }
    }

    
  }

  return (<Fragment>
    <form action={handleRecoveryPassword}>
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Usuário
        </label>
        <div className="relative">
          <InputForm
            type="text"
            name="username"
            placeholder="Informe seu usuário / email"
            classname="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />

          <span className="absolute right-4 top-4">
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                  fill=""
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="mb-5">
       <RecoveryPaswordButton/>
      </div>

      <div className="mt-6 text-center">
        <p>
          <Link href="/acesso" className="text-primary">
           Voltar para o login
          </Link>
        </p>
      </div>
    </form>
  </Fragment>);
}