import { Link as Nav, useNavigate } from "react-router-dom"
import { Toolbar, Tab, Typography, Link, AppBar } from '@mui/material/'

import { useRecoilValue, useResetRecoilState } from "recoil"
import { authState } from "../helpers/atoms"
import React from "react"
const Header = () => {

	const currentUser = useRecoilValue(authState)
	// console.log('currentuserdata',currentUser.data)

	const resetState = useResetRecoilState(authState)
	const authToken:string = localStorage.getItem('authToken')??''
	let isLoggedIn = false;
	if (authToken.length>3) { isLoggedIn = true }
	console.log('isLoggedIn', isLoggedIn)
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('authToken')
		localStorage.removeItem('user')
		resetState()
		navigate('/login')
	}

	/* function useRouteMatch(patterns: readonly string[]) {
		const { pathname } = useLocation();
		for (let i = 0; i < patterns.length; i += 1) {
			const pattern = patterns[i];
			const possibleMatch = matchPath(pattern, pathname);
			if (possibleMatch !== null) {
				return possibleMatch;
			}
		}
		return null;
	} */

	// const routeMatch = useRouteMatch(['/', '/login', '/signup', '/test', '/post/:id', '/create']);
	// const currentTab = routeMatch?.pattern?.path;
	return (
		<React.Fragment>

			<Typography component="h2" variant="h3" align="left" sx={{ p: "1rem" }}>The Blog</Typography>
			{/* print current  user if currentUser  is not empty object*/}




			<AppBar position="static" color="transparent" >
				<Toolbar component="nav" variant="dense"
					sx={{
						borderBottom: 1,
						justifyContent: 'space-between',
						overflowX: 'auto',
					}}>
					{/* <Grid container spacing={0} justifyContent="right"> */}
					{currentUser && Object.keys(currentUser).length !== 0 && <Typography variant="h6" sx={{ flexGrow: 1 }}>Welcome, {currentUser.data.name}</Typography>}
					
						<Tab label="Home" component={Nav} value="/" to="/"></Tab>
						
						<Tab label="Test" component={Nav} value="/test" to="/test"></Tab>
						<Tab label="Post" component={Nav} value="/post/:id" to="/post/1"></Tab>
						<Tab label="Create" component={Nav} value="/create" to="/create"></Tab>
						{!isLoggedIn ?
							(<Tab label="Login" component={Nav} value="/login" to="/login"></Tab>) :

							// (<Typography variant="h6" align="center">Welcome {currentUser}</Typography>)}
							/* {isLoggedIn && */
							(<Tab label="Logout" component={Link} value="/logout" onClick={logout} sx={{ fontWeight: "bold", }}></Tab>)
					}
					
				</Toolbar>
			</AppBar>
		</React.Fragment >
	)
}

export default Header