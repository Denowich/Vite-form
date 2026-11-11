import { useState } from 'react';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { LoginForm } from './LoginForm/LoginForm';

export const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return <div>{isLogin ? <LoginForm /> : <RegistrationForm />}</div>;
};
