import { Stack, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export const LoginForm = (props) => {
  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  const handleLoginChange = (e) => {
    setData(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleLoginClick = () => {
    if (data == 'admin' && pass == '123') {
      // props.setUser({ name: 'Hello Admin!' });
      props.setUser({ name: data });
    } else {
      alert('Unknow user');
    }
  };

  return (
    <div>
      <Stack
        sx={{
          alignItems: 'center',
        }}
      >
        <Stack spacing={2}>
          <Typography variant='h4' component='h1'>
            Войти в систему
          </Typography>

          <Typography variant='subtitle1' component='h1'>
            Нет учетной записи?
            <Button variant='contained' onClick={props.handleRegisterClick}>
              Создать
            </Button>
          </Typography>

          <TextField id='login' label='Login' variant='standard' onChange={handleLoginChange} value={data}></TextField>
          <TextField
            id='password'
            label='Password'
            variant='standard'
            type='password'
            onChange={handlePasswordChange}
            value={pass}
          ></TextField>
          <Button variant='contained' onClick={handleLoginClick}>
            Войти
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
