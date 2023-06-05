import { Link as Nav } from "react-router-dom"
import {Container, Link } from "@mui/material"

const Index = () => {
	return (
		<Container component="main">
				<h2>Index Page</h2>
				
			<Link component={Nav} to="/login">Login</Link>
				<Link component={Nav} to="/signup">Signup</Link>
				

		</Container>

	)
}

export default Index