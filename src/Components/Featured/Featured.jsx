import { Text } from '@nextui-org/react';
import Viteclout from '../../viteclout.png';
import Video from '../../video.png';
import Social from '../../social.png';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import styled from 'styled-components';

const myFeaturedProjects = [
    {
        title: 'Viteclout',
        description: 'A web 3.0 social media DAPP',
        github: 'https://github.com/Mine2Earn/ViteClout',
        demo: 'https://viteclout.ekazuki.fr',
        technos: 'React | TypeScript | Solidity++',
        image: Viteclout
    },
    {
        title: 'Video Streaming',
        description: 'A handmade video player and video stream API',
        github: 'https://github.com/ObstinateM/video-stream',
        technos: 'React | Express',
        image: Video
    },
    {
        title: 'Twitter Clone',
        description: 'Handmade Auth, live chat and a full CRUD API',
        github: 'https://github.com/ObstinateM/obstinate-social-media',
        demo: 'https://social.obstinate.fr',
        technos: 'Web Socket | JWT | SQL',
        image: Social
    }
];

const FeaturedDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

// TODO: EN GRID FDP
export default function Featured() {
    return (
        <>
            <Text h2 css={{ marginBottom: '50px', marginTop: '10%', marginLeft: 0 }} id="featured">
                Featured Projects
            </Text>
            <FeaturedDiv>
                {myFeaturedProjects.map(project => (
                    <FeaturedCard {...project} key={project.title} />
                ))}
            </FeaturedDiv>
        </>
    );
}
