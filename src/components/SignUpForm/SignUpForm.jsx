import { useState } from 'react';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { LoginForm } from './LoginForm/LoginForm';

export const SignUpForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleEnterClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  return (
    <div>
      {isLogin ? <LoginForm handleRegisterClick={handleRegisterClick} /> : <RegistrationForm handleEnterClick={handleEnterClick} />}
    </div>
  );
};
