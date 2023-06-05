import { Box, Button, Container, TextField, Typography } from '@mui/material'
const Login = () => {

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

	
	return (
		<Container component="main" maxWidth="xs">
			<Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
			}}
			>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					
					<Button
						type="submit"
						fullWidth
						size='large'
						variant="contained"
						sx={{ mt: 3, mb: 2 }}

					>
						Sign In
					</Button>
			</Box>
			</Box>
		</Container>
	)
}

export default Login