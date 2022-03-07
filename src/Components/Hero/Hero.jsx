import { Text } from '@nextui-org/react';
import styled from 'styled-components';

const CenteredHero = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;
`;

export default function Hero() {
    return (
        <>
            <CenteredHero>
                <Text h1>Mathis "Obstinate" Beauville</Text>
                <Text h3>Student in Computer Science @ Université Paris-Saclay (UEVE)</Text>
            </CenteredHero>
        </>
    );
}
