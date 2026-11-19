import './App.css';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState();
  return <div className='app-wrapper'>{user ? <div>{user.name}</div> : <SignUpForm setUser={setUser} />}</div>;
}

export default App;
