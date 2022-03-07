import { Link, Button, Tooltip } from '@nextui-org/react';
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
                <Link block color="text" href="#featured" underline>
                    Featured projects
                </Link>
                <Link block color="text" href="#projects" underline>
                    Others projects
                </Link>
            </div>
            <ResumeButton>
                <Tooltip content="Not available yet" placement="bottom">
                    <Button color="white" auto ghost>
                        Resume
                    </Button>
                </Tooltip>
            </ResumeButton>
        </StyledNav>
    );
}
