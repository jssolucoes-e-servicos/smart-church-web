'use server';
import api from '@/services/api';
import { revalidatePath } from 'next/cache';
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

type MyFormData = {
 email: string; churchId: string; app: string
}

export const recoveryPasswordAction = async (formData: MyFormData) => {
  try {

    /* const validatedFields = schema.safeParse({
      email: formData.get('username'),
      churchId: 'igreja_viva',
      app:'web'
    })   */

   /*  if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors,
      }
    } */
    const { data } = await api.post('loginz',formData)
    if (data.token && data.user){
        console.log(data)
    }
  } catch (error) {
    return {
      error: "Falha ao solicitar recuperação de senha"
    }
  }

  revalidatePath("/acesso/recuperar-senha")
}