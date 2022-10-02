import { Text } from '@nextui-org/react';
import styled from 'styled-components';
import { ExternalLink, GitHub } from 'react-feather';
import content from '../../content.json';

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    margin-right: 5px;

    &:hover {
        color: #94f9f0;
    }
`;

export default function Others() {
    return (
        <>
            <Text h2 css={{ marginBottom: '50px', marginTop: '10%', marginLeft: 0 }} id="projects">
                Others Projects
            </Text>
            <Table>
                <thead align="left">
                    <tr>
                        <th>
                            <Text h3 color="#9E9E9E">
                                Title
                            </Text>
                        </th>
                        <th>
                            <Text h3 color="#9E9E9E">
                                Built with
                            </Text>
                        </th>
                        <th>
                            <Text h3 color="#9E9E9E">
                                Link
                            </Text>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {content.others.map((other) => (
                        <TableRow {...other} key={other.title} />
                    ))}
                </tbody>
            </Table>
        </>
    );
}

function TableRow({ title, buildWith, demo, github }) {
    return (
        <tr>
            <td>
                <Text h4>{title}</Text>
            </td>
            <td>
                <Text h4>{buildWith}</Text>
            </td>
            <td>
                {demo && (
                    <Link href={demo} target="_blank" rel="noreferrer">
                        <ExternalLink />
                    </Link>
                )}
                {github && (
                    <Link href={github} target="_blank" rel="noreferrer">
                        <GitHub />
                    </Link>
                )}
            </td>
        </tr>
    );
}
