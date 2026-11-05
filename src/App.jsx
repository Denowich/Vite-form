import { Button, Typography } from '@mui/material';
import './App.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className='app-wrapper'>
      <Typography variant='h4' component='h1'>
        Войти в систему
      </Typography>
      <Stack
        direction='column'
        spacing={1}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <TextField id='login' label='Login' variant='standard'></TextField>
        <TextField id='password' label='Password' variant='standard' type='password'></TextField>
        <Button variant='contained'>Войти</Button>
      </Stack>
    </div>
  );
}

export default App;
