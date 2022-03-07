import { Text } from '@nextui-org/react';
import styled from 'styled-components';
import ThreeJS from '../ThreeJS/ThreeJS';

const AboutSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: auto;
    margin-bottom: 50px;
    margin-top: 10%;
`;

const AboutText = styled.div`
    width: 50%;

    @media (max-width: 1200px) {
        width: 100%;
        justify-self: center;
        align-self: center;
        margin: auto;
    }
`;

const ThreeJSDiv = styled.div`
    height: 40em;
    width: 40em;
    max-height: 500px;
    margin-left: auto;
    justify-self: flex-end;
    align-self: center;

    @media (max-width: 1200px) {
        justify-self: center;
        margin: auto;
    }

    @media (max-width: 768px) {
        height: 20em;
        width: 20em;
    }
`;

export default function About() {
    return (
        <AboutSection id="about">
            <AboutText>
                <Text h2>About Me</Text>
                <Text h4 color="#9E9E9E">
                    Hello ! I'm Mathis, a computer geek who learned to code from a young age in
                    different languages. I started to create the game server for my friends with
                    plugins. During that time I didn't write much code but I did read a lot. I
                    prefer to see practical uses of the concepts to assimilate them faster. In this
                    way, I learned a lot about the concept of programming. Fast forward to 2019, I
                    started to understand the concept of blockchain and how it works. Since then,
                    I've been working to expand on blockchain. I recently participated in a hackaton
                    on Gitcoin (see the Viteclout project). I am versatile, I can work in a team or
                    lead a project alone.
                </Text>
            </AboutText>
            <ThreeJSDiv>
                <ThreeJS />
            </ThreeJSDiv>
        </AboutSection>
    );
}
