import { atom, useRecoilState } from 'recoil'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
const Test = () => {

	const sqlState = atom({
		key: 'sqlState',
		default: 0
	})
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
		</Container>
	)
}
export default Test