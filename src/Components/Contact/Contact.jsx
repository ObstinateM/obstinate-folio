import { GitHub, Linkedin, Mail } from 'react-feather';
import styled from 'styled-components';

const SideBar = styled.div`
    position: fixed;
    bottom: 30px;
    left: 40px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    z-index: 100;

    & > a {
        margin-bottom: 10px;
        color: white;
    }

    & a:hover {
        color: #94f9f0;
    }

    @media (max-width: 768px) {
        visibility: hidden;
    }
`;

export default function Contact() {
    return (
        <SideBar>
            <a href="https://github.com/ObstinateM" target="_blank" rel="noreferrer">
                <GitHub />
            </a>
            <a href="https://www.linkedin.com/in/mathis-beauville" target="_blank" rel="noreferrer">
                <Linkedin />
            </a>
            <a href="mailto:mathis.beauville@gmail.com">
                <Mail />
            </a>
        </SideBar>
    );
}
