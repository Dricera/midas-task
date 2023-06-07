// blog post page
import { useParams } from "react-router-dom"
import { Container, Divider, Typography } from "@mui/material"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'


interface ParamTypes {
	id: string,

}

const Post = () => {

	const readerModules = {
		toolbar: false,
	}


	const { id } = useParams<ParamTypes>()

	return (
		<Container component="main">
			<Typography variant='h4' component='h4' align='left' className="postTitle">Blog Post Title  will go here</Typography>
			<Typography variant='body1' component='p' align='left' className="postAuthor">Showing post for id: {id} submitted by Author Name </Typography>
			<Divider />
			<ReactQuill
				modules={readerModules}
				readOnly
				placeholder="content goes here"
				value={'Loading'}
			/>
			<Divider />
		</Container>
	)
}

export default Post