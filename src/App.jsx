import { Stack, TextField, Button, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
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
          <Button variant='contained'>Войти</Button>
        </Stack>
      </Stack>

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
          <Button variant='contained'>Зарегистрироваться</Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
