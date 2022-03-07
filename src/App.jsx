import { NextUIProvider, createTheme, globalCss } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Featured from './Components/Featured/Featured';
import './App.css';

const globalStyles = globalCss({
    html: { scrollBehavior: 'smooth' }
});

const darkTheme = createTheme({
    type: 'dark'
});

// TODO:
// - Add about me section
//     - Auto calculated experience date
// - Add more proejcts section
// - Add a footer with contact
// - Github, LinkedIn, Twitter, Email icons
// - Add MAXI ANIMTIONS DE LA OUF
function App() {
    globalStyles();

    return (
        <NextUIProvider theme={darkTheme}>
            <Container>
                <Nav />
                <Hero />
                <About />
                <Featured />
            </Container>
        </NextUIProvider>
    );
}
export default App;
