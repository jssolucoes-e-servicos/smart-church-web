'use-client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginSelectButton({profile}:{profile:string}) {
 const router = useRouter()

  const handleSelectRoute = () => {
    Cookies.set('smartead.profile', profile)
    switch (profile) {
      case 'studant':
        router.push('/acesso/aluno');
        break;
      case 'teacher':
        router.push('/acesso/professor');  
        break;
      case 'manager':
        router.push('/acesso/gestor');  
        break;
      default:
        break;
    }
  }

  return (
    <button 
      type="button" 
      className={`w-full cursor-pointer rounded-lg border
                ${profile !== 'manager' ? 'bg-primary text-white border-primary' : 'bg-white text-graydark border-graydark'} p-4 transition hover:bg-opacity-90`}
      onClick={handleSelectRoute}
    >
      { profile === 'studant' && (<span className='font-semibold'>Eu sou Aluno</span>)}
      { profile === 'teacher' && (<span className='font-semibold'>Sou Educador</span>)}
      { profile === 'manager' && (<span className='font-semibold'>Colaborador</span>)}
         
    </button>
  );
};