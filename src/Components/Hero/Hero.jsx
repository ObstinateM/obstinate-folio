import { Text } from '@nextui-org/react';
import styled from 'styled-components';

const CenteredHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30vh;
`;

const HeroDiv = styled.div`
    width: 40%;
`;

export default function Hero() {
    return (
        <>
            <CenteredHero>
                <Text h1>Mathis "Obstinate" Beauville</Text>
                <Text h3>Student in Computer Science @ Université Paris-Saclay (UEVE)</Text>
                {/* <HeroDiv>
                    <Text h5 color="#9E9E9E">
                        I’m a software engineer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I’m focused on
                        building accessible, human-centered products at Upstatement.
                    </Text>
                </HeroDiv> */}
            </CenteredHero>
        </>
    );
}
