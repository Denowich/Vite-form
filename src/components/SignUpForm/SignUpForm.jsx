import { useState } from 'react';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LoginForm } from './LoginForm/LoginForm';

export const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleEnterClick = () => {
    setIsLogin(false);
  };

  const handleRegisterClick = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? <LoginForm handleEnterClick={handleEnterClick} /> : <RegistrationForm handleRegisterClick={handleRegisterClick} />}
    </div>
  );
};
