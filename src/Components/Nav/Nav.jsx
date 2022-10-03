import { Link, Button } from '@nextui-org/react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 1rem;
`;

const RightNav = styled.div`
    display: flex;
`;

const ResumeButton = styled.div`
    margin-left: auto;
    justify-self: flex-end;
`;

export default function Nav() {
    return (
        <StyledNav>
            <RightNav>
                <Link block color="text" href="#about" underline>
                    About Me
                </Link>
                <Link block color="text" href="#featured" underline>
                    Featured Projects
                </Link>
                <Link block color="text" href="#projects" underline>
                    Others Projects
                </Link>
            </RightNav>
            <ResumeButton>
                {/* <Tooltip content="Not available yet" placement="bottom"> */}
                <Button color="white" auto ghost as="a" href="/CV.pdf" target="_blank">
                    Resume
                </Button>
                {/* </Tooltip> */}
            </ResumeButton>
        </StyledNav>
    );
}
