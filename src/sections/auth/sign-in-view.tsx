import { useState } from 'react';
import { useCookies } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Alert, Collapse } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from 'src/routes/hooks';

import { useLoginMutation } from 'src/rtk/features/user/user.api';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function SignInView() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [ login,  {isLoading}] = useLoginMutation()

  const { setState: setAuthSession} = useCookies('auth', { access_token: '',  user: {}});

  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const handleSignIn = async () => {
    try {
      setErrorMsg('')
      const payload = await login({email, password}).unwrap();
      if (payload.data.user?.role != "admin") {
        throw Error(" Wrong credentials ")
      }

      setAuthSession(payload.data)
      router.push('/');
    } catch (error) {
      setErrorMsg("Issue loginning in, please check your credentials")
      console.log('rejectedk', error);
    }
  };

  const renderForm = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
      }}
    >
     <Collapse in={Boolean(errorMsg)}>
          <Alert severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorMsg('');
                }}
              >
                {/* <CloseIcon fontSize="inherit" /> */}
              </IconButton>
            }
          >
            {errorMsg}
          </Alert>
      </Collapse>
      

      <TextField
        fullWidth
        name="email"
        label="Email address"
        value={email}
        onChange={event => setEmail(event.target.value)}
        sx={{ my: 3 }}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <Link variant="body2" color="inherit" sx={{ mb: 1.5 }}>
        Forgot password?
      </Link>
      <TextField
        fullWidth
        name="password"
        label="Password"
        value={password}
        onChange={handlePassword}
        type={showPassword ? 'text' : 'password'}
        slotProps={{
          inputLabel: { shrink: true },
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{ mb: 3 }}
      />

      <Button
        fullWidth
        size="large"
        type="submit"
        color="inherit"
        variant="contained"
        disabled= {Boolean(!email && !password)}
        onClick={handleSignIn}
      >
        Sign in
      </Button>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography variant="h5">Sign in</Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
          }}
        >
          Get in here and control things
          
        </Typography>
      </Box>
      {renderForm}
      <Divider sx={{ my: 3, '&::before, &::after': { borderTopStyle: 'dashed' } }}>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', fontWeight: 'fontWeightMedium' }}
        >
          OR
        </Typography>
      </Divider>
      <Box
        sx={{
          gap: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          fullWidth
          size="large"
          color="grey"
          type="submit"
          variant="outlined"
          onClick={handleSignIn}
          tabIndex={-1}
          startIcon={<Iconify width={22} icon="socials:google" />}
        >
        Login with Gmail
      </Button>
      
        {/* <IconButton color="inherit">
          <Iconify width={22} icon="socials:google" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:github" />
        </IconButton>
        <IconButton color="inherit">
          <Iconify width={22} icon="socials:twitter" />
        </IconButton> */}
      </Box>
    </>
  );
}
