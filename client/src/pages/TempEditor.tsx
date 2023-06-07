import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { atom, useRecoilState } from "recoil";
import parse from 'html-react-parser';
import { encode as base64_encode, decode as base64_decode } from 'base-64';

const TempEditor = () => {

	const modules = {
		toolbar: [
			[{ 'header': [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			[{ 'align': [] }],
			[{ 'font': [] }],
			['link', 'image','video'],
			['clean']
		],
	}
	
	const readerModules = {
		toolbar: false,
	}

	const editatom = atom({
		key: 'editAtom',
		default: '',
	})
	const [contentDisplay, setcontentDisplay] = useRecoilState(editatom)
	const handleChange = (content: string, delta: any, source: any, editor: any) => {
		const html = content.toString()
		const encodedString = base64_encode(html)
		const decodedHTML = base64_decode(encodedString)
		console.log(encodedString, 'base64')
		console.warn(decodedHTML, 'decoded');

		setcontentDisplay(decodedHTML)
	}


	return (
		<div>
			<h1>Editor</h1>
			<ReactQuill theme="snow"
				modules={modules}
				placeholder="Write something awesome..."
				style={{ height: "300px", border: "1px solid black" }}
				className="editor"
				onChange={handleChange}
			/>

			<div className=" ql-editor">
				{parse(contentDisplay)}
			</div>
			<div >
				<ReactQuill
					modules={readerModules}
					readOnly
					placeholder="content goes here"
					value={contentDisplay}
				/>
			</div>


		</div>
	);

}
export default TempEditor;