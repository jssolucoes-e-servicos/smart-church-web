
'use server';
import api from '@/services/api';
import { cookies } from 'next/headers'

export const signInAction = async (formData: FormData) => {
  try {
    const rawFormData = {
      email: formData.get('email'),
      password: formData.get('password'),
      app:'web'
    }
    const { data } = await api.post('login',rawFormData)
    if (data.token && data.user){
      cookies().set('elb0', data.token, { secure: true })
      cookies().set('elb1', JSON.stringify(data.user), { secure: true })
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
    }

  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login"
    }
  }
}