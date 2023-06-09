import { Link as Nav } from "react-router-dom"
import { Button, Card, CardActions, CardContent, Container, Divider, Grid, Link, Typography } from "@mui/material"
import { useEffect } from "react"
import { listPosts } from "../helpers/apis"
import { atom, useRecoilState } from "recoil"

const Index = () => {
	const postList = atom({
		key: 'postList',
		default: [],
	})
	const [postListState, setPostListState] = useRecoilState(postList)

	useEffect(() => {
		const getAllPosts = async () => {
			try {
				const response = await listPosts()
				const postObjr = response.data
				setPostListState(postObjr)

			} catch (error) {
				console.log(error)
			} finally {
				//
				console.log(postListState, 'postObj')
			}
		}
		getAllPosts()
	}, [])
	// const navigate = useNavigate()

	return (
		<Container component="main">

			<Typography variant='h4' component='h4' align='left'>Index Page</Typography>
			<Divider />
			<Grid item xs={12} spacing={1} container>


				{/* map postListState array to card components */}
				{postListState.map((post: any) =>
					<Grid item>
					<Card sx={{ maxWidth: 345 }} key={post.post_id}>
						<CardContent>
							<Typography gutterBottom variant="h4" component="div">
								{post.post_title}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								On {post.created_at} 
							</Typography>
						</CardContent>
						<CardActions>
							<Link component={Nav} to={'/post/'+post.post_id}><Button size="medium">Read this Post</Button></Link>
						</CardActions>
						</Card>
						</Grid>
				)}
				<Divider variant="fullWidth" sx={{ py: "4rem",my:"4rem" }} />


			</Grid>

		</Container>

	)
}

export default Index