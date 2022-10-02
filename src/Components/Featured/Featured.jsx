import { Text } from '@nextui-org/react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import styled from 'styled-components';
import content from '../../content.json';

const FeaturedDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export default function Featured() {
    return (
        <>
            <Text h2 css={{ marginBottom: '50px', marginTop: '10%', marginLeft: 0 }} id="featured">
                Featured Projects
            </Text>
            <FeaturedDiv>
                {content.featured.map((project) => (
                    <FeaturedCard {...project} key={project.title} />
                ))}
            </FeaturedDiv>
        </>
    );
}
