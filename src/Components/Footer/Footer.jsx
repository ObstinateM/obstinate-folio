import styled from 'styled-components';
import { Text } from '@nextui-org/react';

const FooterContainer = styled.div`
    margin-top: 100px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Text h6>Made with React by Obstinate</Text>
        </FooterContainer>
    );
}
