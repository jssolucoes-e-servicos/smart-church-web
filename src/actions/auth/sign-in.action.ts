
'use server';
import api from '@/services/api';
import { cookies } from 'next/headers'

export const signInAction = async (formData: FormData) => {
  try {
    console.log('enter in action server')
    const rawFormData = {
      email: formData.get('username'),
      password: formData.get('password'),
      churchId: 'igreja_viva',
      app:'web'
    }
    const { data } = await api.post('login',rawFormData)
    if (data.token && data.user){
      cookies().set('scp0', data.token, { secure: true })
      cookies().set('scp1', JSON.stringify(data.user), { secure: true })
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
    }

  } catch (error) {
    console.error(error);
    return {
      error: "Falha ao processar seu login"
    }
  }
}