import { Box, Button, Container, Divider, Link, TextField, Typography } from '@mui/material'
import { Link as Nav, useNavigate } from 'react-router-dom'
import { userLogin, setAuthToken } from '../helpers/apis';
import { authState } from '../helpers/atoms';
import { useSetRecoilState } from 'recoil';
const Login = () => {


	const navigate = useNavigate();
	const setAuthState=useSetRecoilState(authState)
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget)

		// Login API Call logic
		const loginBody = {
			email: data.get('email'),
			password: data.get('password'),
		};
		try {
			//api call will go here
			userLogin(loginBody).then((response) => {
				const token = JSON.parse(response.data).jwt;
				localStorage.setItem('authToken', token);
				
				const decodedToken=setAuthToken(token)
				localStorage.setItem('user', JSON.stringify(decodedToken))
				setAuthState(decodedToken)
				
				console.log(response.data);

			})
			navigate('/')
			// redirect to home page


		} catch (error) {
			console.log(error)
		}

	};



	return (
		<Container component="main" maxWidth="xs">
			<Box sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				p: '1rem',
				my: '1rem',
				border: '1px solid black',
			}}
			>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Divider variant="fullWidth" >~ </Divider>
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
					<Typography component={'div'} variant={'body2'} align={'center'}>
						Don't have an account? <Link component={Nav} to="/signup" sx={{fontWeight:"bold",fontSize:"1rem",placeItems:"center"}}>Sign Up</Link>
					</Typography>

				</Box>
			</Box>
		</Container>
	)
}

export default Login
