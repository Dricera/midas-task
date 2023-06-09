// blog post page
import { useParams } from "react-router-dom"
import { Container, Divider, Typography } from "@mui/material"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { atom, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { authState, postState } from "../helpers/atoms"
import { getPostById } from "../helpers/apis"
import { useEffect, useRef } from "react"

interface ParamTypes {
	id: string,
}


const Post = () => {
	const { id } = useParams<ParamTypes>()

	const currentUser: object = useRecoilValue(authState)

	const postContent = atom({
		key: 'postContent',
		default: '',
	})
	const [contentDisplay, setContentDisplay] = useRecoilState(postContent)

	let userName = ' '
	if (currentUser !== null && currentUser.data !== undefined) { userName = currentUser.data.name }

	const readerModules = {
		toolbar: false,
	}

	const [postObject,setPostObject]=useRecoilState(postState)
	//  let postObj=useRef({})
	// let postDecodedContent = useRef('')
	useEffect(() => {
		const getPost = async () => {
			try {
				
				const response = await getPostById(id)
				const postObjr = response.data[0]
				console.log(postObjr, 'postObjr')
				setPostObject(postObjr)
				console.log(postObject, 'postObj')
				// postObj.current=postObjr

			} catch (error) {
				console.log(error)
			} finally {
				// console.log(postObject,'postObject')
				// postObj.current = postObject;
				const unsafeString = atob(postObject.post_content.toString())
				const postDecodedContent = unsafeString
				console.log(postObject, 'postDecodedContent')
				setContentDisplay(postDecodedContent)
			}
		}
		getPost()
	}, [])
				useResetRecoilState(postState)
	// const unsafeString= postObject.post_content.toString()
	// const postDecodedContent= atob(unsafeString)


	return (
		<Container component="main">
			<Typography variant='h4' component='h4' align='left' className="postTitle">
				{postObject.post_title || 'Title'}
				</Typography>
			<Typography variant='body1' component='p' align='left' className="postAuthor">By { } /{userName}/ on {postObject.created_at || 'Date'} </Typography>
			<Divider />
			<ReactQuill
				modules={readerModules}
				readOnly
				placeholder="content goes here"
				value={contentDisplay||'Loading'}
			/>
			<Divider />
		</Container>
	)
}

export default Post