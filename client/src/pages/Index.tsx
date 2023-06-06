import { Link as Nav } from "react-router-dom"
import {Container, Link, Typography } from "@mui/material"

const Index = () => {
	return (
		<Container component="main">
			<Typography variant='h4' component='h4' align='center'>Index Page</Typography>	
			<Typography variant='body1' component='p' align='center'>This is the index page</Typography>
			<Typography variant='body1' component='p' align='center'>Go to <Link component={Nav} to='/login'>Login</Link></Typography>
			<Typography variant='body1' component='p' align='center'>Go to <Link component={Nav} to='/signup'>Signup</Link></Typography>
			<Typography variant='body1' component='p' align='center'>Go to <Link component={Nav} to='/test'>Test</Link></Typography>
			
				

		</Container>

	)
}

export default Index