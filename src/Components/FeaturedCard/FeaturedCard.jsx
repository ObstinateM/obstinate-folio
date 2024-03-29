import { Button, Card, Col, Link, Row, Text } from '@nextui-org/react';
import styled from 'styled-components';
import fallback from '../../fallback.jpeg';
import './FeaturedCard.css';

const HorizontalConter = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function FeaturedCard({ title, description, github, demo, image, buildWith }) {
    return (
        <Card cover css={{ w: '400px', marginBottom: '50px', bgColor: '#3a1a9a' }}>
            <Card.Header>
                <Col>
                    <Text h2 color="white">
                        {title}
                    </Text>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        {description}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
                <HorizontalConter>
                    <Card.Image objectFit="cover" src={image ?? fallback} height="auto" width="100%" alt={`${title} image`} className="filter" />
                </HorizontalConter>
            </Card.Body>
            <Card.Divider />
            <Card.Footer blur>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Text size={12} color="#9E9E9E">
                                    {buildWith}
                                </Text>
                                <Link color="text" size={12} underline href={github} target="_blank">
                                    Source code
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            {demo ? (
                                <Link href={demo} target="_blank">
                                    <Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }}>
                                        <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                                            VISIT DEMO
                                        </Text>
                                    </Button>
                                </Link>
                            ) : (
                                <Button flat auto rounded css={{ color: '#94f9f0', bg: '#94f9f026' }} disabled>
                                    <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                                        No demo available
                                    </Text>
                                </Button>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}
