import { useState } from 'react'

const Test = () => {
	const [count,setCount] = useState(0)

	return (
		<>
			<h2>  Test</h2>
			<div className="card">
				<button onClick={() => setCount((count) =>  count = count + 2 )}>
					count is {count}
				</button>
			</div>
		</>
	)
}
export default Test