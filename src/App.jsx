import { NextUIProvider, createTheme, globalCss } from '@nextui-org/react';
import styled from 'styled-components';
import { ArrowUp } from 'react-feather';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Featured from './Components/Featured/Featured';
import Contact from './Components/Contact/Contact';
import Others from './Components/Others/Others';
import Footer from './Components/Footer/Footer';
import './App.css';

const globalStyles = globalCss({
    html: { scrollBehavior: 'smooth' }
});

const darkTheme = createTheme({
    type: 'dark'
});

const GoTop = styled.a`
    position: fixed;
    bottom: 30px;
    right: 30px;
    color: white;

    &:hover {
        color: #94f9f0;
    }

    @media (max-width: 768px) {
        visibility: hidden;
    }
`;

const MyContainer = styled.div`
    margin: 0 10rem;

    @media (max-width: 1270px) {
        margin: 0 6rem;
    }

    @media (max-width: 768px) {
        margin: 0 2rem;
    }
`;

function App() {
    globalStyles();

    return (
        <>
            <Contact />
            <NextUIProvider theme={darkTheme}>
                <MyContainer>
                    <Nav />
                    <Hero />
                    <About />
                    <Featured />
                    <Others />
                    <Footer />
                </MyContainer>
            </NextUIProvider>
            <GoTop href="#">
                <ArrowUp />
            </GoTop>
        </>
    );
}
export default App;
