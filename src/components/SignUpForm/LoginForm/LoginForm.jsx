import { Stack, TextField, Button, Typography } from '@mui/material';

export const LoginForm = (props) => {
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
            <Button variant='contained'>Создать</Button>
          </Typography>

          <TextField id='login' label='Login' variant='standard'></TextField>
          <TextField id='password' label='Password' variant='standard' type='password'></TextField>
          <Button variant='contained' onClick={props.handleEnterClick}>
            Войти
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
