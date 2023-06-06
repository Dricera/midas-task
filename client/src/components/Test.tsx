import { atom, atomFamily, useRecoilState } from 'recoil'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Test = () => {

	const request = async () => {
		//cors headers
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		headers.append('Accept', 'application/json')
		headers.append('Origin', 'http://localhost:8080')
		//request
		const response = await fetch('http://localhost:8080/test.php')
		const data = await response.json()
		const text = data.msg;
		return text;
	}
	//store result of request in a string
	const apicall = () => {
		request().then((text) => {
			setMsg((msg) => msg = text)
		})
	}

	const sqlState = atom({
		key: 'sqlState',
		default: 0
	})
	const dataState =  atom({
		key: 'dataState',
		default: 'test'
	})
	const [msg,setMsg] = useRecoilState(dataState);
	const [count, setCount] = useRecoilState(sqlState)

	return (
		<Container maxWidth="md">
			<Typography component="h4" variant='h4' align='center'>
				Test
			</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => setCount((count) => count = count + 2)}>
				count is {count}
			</Button>
			<Button
				variant="contained"
				color="primary"
				onClick={apicall}>
				{msg}
			</Button>
		</Container>
	)
}
export default Test