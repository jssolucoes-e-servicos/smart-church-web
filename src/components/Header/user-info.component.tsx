
import Image from "next/image";
import { Fragment } from "react";
import { getAuthenticatedAction } from '@/actions/users/get-authenticated.action';
export default async function UserInfo() {

 const userLogged = await getAuthenticatedAction();
  
  return (<Fragment>
    <span className="hidden text-right lg:block">
      <span className="block text-sm font-medium text-black dark:text-white">
      <span className="block text-xs">{}</span>
        {userLogged?.name}
      </span>
      <span className="block text-xs">{userLogged?.email}</span>
    </span>
    <span className="h-12 w-12 rounded-full">
      <Image
        width={112}
        height={112}
        src={"/images/user/user-01.png"}
        alt="User"
      />
    </span>
    <svg
      className="hidden fill-current sm:block"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
        fill=""
      />
    </svg>
  </Fragment>)
};