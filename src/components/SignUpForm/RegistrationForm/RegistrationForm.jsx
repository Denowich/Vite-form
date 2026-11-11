import { Stack, TextField, Button, Typography } from '@mui/material';

export const RegistrationForm = (props) => {
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
            <Button variant='contained'>Войти</Button>
          </Typography>

          <TextField id='login' label='Login' variant='standard'></TextField>
          <TextField id='password' label='Password' variant='standard' type='password'></TextField>
          <Button variant='contained' onClick={props.handleRegisterClick}>
            Зарегистрироваться
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
