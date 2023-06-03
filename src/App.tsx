import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'
import { RecoilRoot } from 'recoil'
import { RecoilEnv } from 'recoil'
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

function App() {
  const PlaceHolder = () => {
    return(
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Vite + React</h1>
    </div>
    )}
  return (
    <RecoilRoot>
      <PlaceHolder />
      <Test />
    </RecoilRoot>
  )
}



export default App
