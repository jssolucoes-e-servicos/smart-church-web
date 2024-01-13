"use server"
import { cookies } from 'next/headers'
import { IUser } from '@/interfaces'

export async function getAuthenticatedAction(): Promise<IUser|null> {
  const cookieStore = cookies()
  const userCookie = cookieStore.get('elb1')?.value;
  if (userCookie){
    const user: IUser = JSON.parse(userCookie);
    return user;
  }
  return null;
}