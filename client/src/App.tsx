import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { RecoilEnv } from 'recoil'

import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Post from './pages/Post'
import Create from './pages/Create'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, ThemeProvider, createTheme } from '@mui/material';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

function App() {
  const defaultTheme = createTheme();

  return (

    <RecoilRoot>
      <BrowserRouter basename="/">
        <ThemeProvider theme={defaultTheme}>
          {/* <CssBaseline /> */}
          <Container maxWidth="lg" disableGutters>
            <Header />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/create" element={<Create />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              
            </Routes>

            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>

  )
}



export default App
