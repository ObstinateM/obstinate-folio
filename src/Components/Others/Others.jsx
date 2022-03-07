import { Text } from '@nextui-org/react';
import styled from 'styled-components';
import { ExternalLink, GitHub } from 'react-feather';

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

const others = [
    {
        title: 'Portfolio V2',
        buildWith: 'Three.js | React | Styled Components',
        demo: 'https://github.com/ObstinateM/obstinate-folio'
    },
    {
        title: 'NFT Mint Front',
        buildWith: 'React | Ethers.js',
        demo: 'https://nft.obstinate.fr/',
        github: 'https://github.com/ObstinateM/nft-first-front'
    },
    {
        title: 'NFT Smart Contract',
        buildWith: 'Solidity | Hardhat',
        github: 'https://github.com/ObstinateM/nft-first-contract'
    }
];

export default function Others() {
    return (
        <>
            <Text h2 css={{ marginBottom: '50px', marginTop: '10%', marginLeft: 0 }} id="projects">
                Others projects
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
                    {others.map(other => (
                        <TableRow {...other} />
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
                    <Link href={demo}>
                        <ExternalLink />
                    </Link>
                )}
                {github && (
                    <Link href={github}>
                        <GitHub />
                    </Link>
                )}
            </td>
        </tr>
    );
}
