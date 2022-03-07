import { Row, Col, Text, Button, Card, Link } from '@nextui-org/react';
import styled from 'styled-components';
import Temp from '../../hello_purple.jpg';

const AboutSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
`;

const ThreeJS = styled.div``;

const TempIMG = styled.img``;

export default function About() {
    return (
        <AboutSection id="about">
            <div>
                <Text h2>About Me</Text>
                <Text h4 color="#9E9E9E">
                    Hello! My name is Brittany and I enjoy creating things that live on the
                    internet. My interest in web development started back in 2012 when I decided to
                    try editing custom Tumblr themes — turns out hacking together a custom reblog
                    button taught me a lot about HTML & CSS! Fast-forward to today, and I’ve had the
                    privilege of working at an advertising agency, a start-up, a huge corporation,
                    and a student-led design studio. My main focus these days is building
                    accessible, inclusive products and digital experiences at Upstatement for a
                    variety of clients. I also recently launched a course that covers everything you
                    need to build a web app with the Spotify API using Node & React.
                </Text>
            </div>
            <ThreeJS>
                <TempIMG src={Temp} alt="" />
            </ThreeJS>
        </AboutSection>
    );
}
