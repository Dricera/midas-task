import { atom, useRecoilState } from 'recoil'

const Test = () => {
	
	const countState = atom({
		key: 'countState',
		default: 0
	})
	const [count, setCount] = useRecoilState(countState)

	return (
		<>
			<h2>  Test</h2>
			<div className="card">
				<button onClick={() => setCount((count) => count = count + 2)}>
					count is {count}
				</button>
			</div>
		</>
	)
}
export default Test