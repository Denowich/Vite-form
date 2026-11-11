import { Stack, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

export const RegistrationForm = (props) => {
  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  const handleLoginChange = (e) => {
    setData(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPass(e.target.value);
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
            Регистрация в системе
          </Typography>

          <Typography variant='subtitle1' component='h1'>
            Есть учётка?
            <Button variant='contained' onClick={props.handleEnterClick}>
              Войти
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
          <Button variant='contained'>Зарегистрироваться</Button>
        </Stack>
      </Stack>
    </div>
  );
};
