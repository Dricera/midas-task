import { Link as Nav, matchPath, useLocation } from "react-router-dom"
import { Toolbar, Tabs, Tab, Typography } from '@mui/material/'
import React from "react";

const Header = () => {
	function useRouteMatch(patterns: readonly string[]) {
		const { pathname } = useLocation();

		for (let i = 0; i < patterns.length; i += 1) {
			const pattern = patterns[i];
			const possibleMatch = matchPath(pattern, pathname);
			if (possibleMatch !== null) {
				return possibleMatch;
			}
		}
		return null;
	}

	const routeMatch = useRouteMatch(['/','/login', '/signup', '/test', '/post/:id', '/create']);
	const currentTab = routeMatch?.pattern?.path;
	return (
		<React.Fragment>

			<Typography component="h2" variant="h3" align="center">Blog</Typography>

			<Toolbar component="nav" variant="dense"
				sx={{
					borderBottom: 1,
					justifyContent: 'space-between',
					overflowX: 'auto',
				}}>
				<Tabs value={currentTab}>
					<Tab label="Home" component={Nav} value="/" to="/"></Tab>
					<Tab label="Login" component={Nav} value="/login" to="/login"></Tab>
					<Tab label="Signup" component={Nav} value="/signup" to="/signup"></Tab>
					<Tab label="Test" component={Nav} value="/test" to="/test"></Tab>
					<Tab label="Post" component={Nav} value="/post/:id" to="/post/1"></Tab>
					<Tab label="Create" component={Nav} value="/create" to="/create"></Tab>
				</Tabs>
			</Toolbar>
		</React.Fragment>
	)
}

export default Header