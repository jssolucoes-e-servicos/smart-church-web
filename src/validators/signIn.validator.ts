import * as yup from 'yup';
export const signInValidator = yup.object().shape({
  username: yup.string().required('Username / Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
  profile: yup.string().required('Não foi possivel verifiar os dados'),
  churchId: yup.string().required('Não foi possível verificar a igreja de origem')
});