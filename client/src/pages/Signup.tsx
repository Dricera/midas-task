import { Container, Box, Link, Typography, Grid, Avatar, Button, Checkbox, FormControlLabel, TextField } from "@mui/material"
import { Link as Nav } from 'react-router-dom'

const Signup = () => {

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget)
		// Login API Call logic

		//map data to user object
		const user = {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			password: data.get('password'),
		}
		//api call for /register will go here
		console.log(user)
	};

	return (
		<Container component="main" maxWidth="sm">
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				border: "1px solid black",
				p: "1rem 2rem",
				m: "1rem",
			}}>
				<Avatar sx={{
					m: 1,
					bgcolor: 'secondary.main',
				}}>
				</Avatar>
				<Typography variant="h5">Sign up</Typography>
				<Box component="form" sx={{
					width: 1, // Fix IE 11 issue.
					mt: 3,
				}}
					onSubmit={handleSubmit}

				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="lastName"
								label="Last Name"
								name="lastName"
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								//component is input type email
								type="email"
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox name="agreedTOC" value="true" color="primary" required />
								}
								label="I have read and agreed to the Terms of Service{placeholder}."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						sx={{ mt: 3, mx: 0, mb: 2 }}
					>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link to="/login" component={Nav} variant="body2" underline="hover">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	)
}

export default Signup 