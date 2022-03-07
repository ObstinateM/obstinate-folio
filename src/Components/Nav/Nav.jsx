import { Link, Button } from '@nextui-org/react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const ResumeButton = styled.div`
    margin-left: auto;
    justify-self: flex-end;
`;

export default function Nav() {
    return (
        <StyledNav>
            <div>
                <Link block color="text" href="#about" underline>
                    About me
                </Link>
                <Link block color="text" href="#work" underline>
                    Work
                </Link>
            </div>
            <ResumeButton>
                <Button bordered color="gradient" auto>
                    Resume
                </Button>
            </ResumeButton>
        </StyledNav>
    );
}
