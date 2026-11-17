import { useState } from 'react';
import './App.css';
import { SignUpForm } from './components/SignUpForm/SignUpForm';

function App() {
  const [user, setUser] = useState();
  return <div className='app-wrapper'>{user ? <div>{user.name}</div> : <SignUpForm setUser={setUser} />}</div>;
}

export default App;
