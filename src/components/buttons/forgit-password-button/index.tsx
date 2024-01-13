"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordButton({load = false, profile = 'studant' }:{load:boolean, profile:string}) {
  const router = useRouter();

  const handleClick = () => {
    Cookies.set('smartead.profile', profile)
    switch (profile) {
      case 'studant':
        router.push(`/recuperar-senha?p=s`);  
        break;
      case 'teacher':
        router.push(`/recuperar-senha?p=t`);  
        break;
      case 'manager':
        router.push(`/recuperar-senha?p=m`);  
        break;
      case 'cma':
        router.push(`/recuperar-senha?p=c`);  
        break;
      default:
        break;
    }
    
  } 

  return (
    <p>
      <button 
        type='button'
        disabled={load}
        className="text-primary"
        onClick={handleClick}>
        Esqueci minha senha
      </button>
    </p>
  );
};