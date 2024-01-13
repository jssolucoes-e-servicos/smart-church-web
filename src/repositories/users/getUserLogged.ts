"use server"
import { cookies } from 'next/headers'

export async function getUserLogged(){
  const cookieStore = cookies()
  const userCookie = cookieStore.get('elb1')?.value;
  if (userCookie){
    const user = JSON.parse(userCookie);
    console.log(user);
    return user;
  }
  return null;
}