import {BrowserRouter , Route ,Routes } from 'react-router-dom';
import Home from './pages/Home';
import {ChakraProvider } from '@chakra-ui/react';
import SignIn from './pages/SignIn';
import Register from './pages/RegisterPage';

export default function App(){
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path='*' element={<Home/>}/>
                    <Route path='signin' element={<SignIn/>} />
                    <Route path='register' element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    )
}