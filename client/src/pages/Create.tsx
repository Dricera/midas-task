// create blog post page
//Quill
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';


import { atom, useRecoilState } from "recoil"
import { Container, Divider, Typography, TextField, Button, MenuItem } from "@mui/material"
// import { Editor } from 'react-draft-wysiwyg';
import { postState } from "../helpers/atoms"
import { createPost } from "../helpers/apis"


import parse from 'html-react-parser';
import { encode as base64_encode, decode as base64_decode, encode } from 'base-64';
import { useNavigate } from "react-router-dom";



const Create = () => {


	// const [post, createPost] = useRecoilState(postState)

	const navigate = useNavigate()
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const data = new FormData(e.currentTarget)

		const userData = JSON.parse(localStorage.getItem('user'))
		const post = {
			title: data.get('postTitle'),
			content: contentDisplay,
			category: data.get('postCategory'),
			author: userData.data.id
		}
		try {
			//api call will go here
			console.log(post)
			const response = await createPost(post)
			console.log(response, 'response');
			Navigate('/')
		} catch (error) {
			console.log(error)
		}
	}



	const modules = {
		toolbar: [
			[{ 'header': [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			[{ 'align': [] }],
			[{ 'font': [] }],
			['link', 'image', 'video'],
			['clean']
		],
	}



	const editatom = atom({
		key: 'editAtom',
		default: '',
	})

	const [contentDisplay, setcontentDisplay] = useRecoilState(editatom)
	const handleChange = (content: string /* , delta: any, source: any, editor: any */) => {
		const html = content.toString()
		const encodedString = base64_encode(html)
		// const decodedHTML = base64_decode(encodedString)
		// console.log(encodedString, 'base64')
		// console.warn(decodedHTML, 'decoded');
		setcontentDisplay(encodedString)
	}



	return (
		<Container component="main">
			<Typography variant='h4' component='h4' align='left' className="postTitle">Create a new blog post</Typography>
			<Divider />
			<form onSubmit={handleSubmit}>
				<TextField
					id="outlined"
					label="Title"
					maxRows={1}
					fullWidth
					required
					name="postTitle"
				/>

				<ReactQuill theme="snow"
					modules={modules}
					name="postBody"
					placeholder="Write something awesome..."
					style={{ minHeight: "300px", border: "1px solid rgba(0, 0, 0, 0.23)", borderRadius: "4px", marginTop: "1rem" }}
					className="editor"
					onChange={handleChange}

				/>

				<TextField
					id="outlined-select-currency-native"
					select
					label="Category"
					fullWidth
					required
					name="postCategory"
					defaultValue={1}
				>
					<MenuItem value="1">Personal</MenuItem>
					<MenuItem value="2">Food</MenuItem>
					<MenuItem value="3">Technology</MenuItem>
					<MenuItem value="4">Travel</MenuItem>
				</TextField>


				<Button variant="contained" type="submit" fullWidth>Create Post</Button>
			</form>
		</Container>

	)
}
export default Create