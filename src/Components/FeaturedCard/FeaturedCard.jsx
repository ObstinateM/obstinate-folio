import { Row, Col, Text, Button, Card, Link } from '@nextui-org/react';
import Third from '../../third_blur.png';

export default function FeaturedCard({ title, description, github, demo, image, technos }) {
    return (
        <Card cover css={{ w: '400px', marginBottom: '50px' }}>
            <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                <Col>
                    <Text h2 color="white">
                        {title}
                    </Text>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        {description}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body>
                <Card.Image
                    objectFit="cover"
                    src={image}
                    height={400}
                    width="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                blur
                css={{
                    position: 'absolute',
                    bgBlur: '#0f1114',
                    borderTop: '$borderWeights$light solid $gray700',
                    bottom: 0,
                    zIndex: 1
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Text size={12} color="#9E9E9E">
                                    {technos}
                                </Text>
                                <Link
                                    color="text"
                                    size={12}
                                    underline
                                    href={github}
                                    target="_blank"
                                >
                                    Source code
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            {demo ? (
                                <Link href={demo} target="_blank">
                                    <Button
                                        flat
                                        auto
                                        rounded
                                        css={{ color: '#94f9f0', bg: '#94f9f026' }}
                                    >
                                        <Text
                                            css={{ color: 'inherit' }}
                                            size={12}
                                            weight="bold"
                                            transform="uppercase"
                                        >
                                            VISIT DEMO
                                        </Text>
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    flat
                                    auto
                                    rounded
                                    css={{ color: '#94f9f0', bg: '#94f9f026' }}
                                    disabled
                                >
                                    <Text
                                        css={{ color: 'inherit' }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Coming soon
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
