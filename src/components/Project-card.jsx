import { Container, Card,Image,Tabs, Title,Text,Group,Stack} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { base } from "framer-motion/client";
// import demoVideo from "../assets/videos/ScapshotGameplayDemo.mp4";

function ProjectCard({video, overview,techStack,details,itch,youtube}){
    return(
        <Container size="md">
            <Card shadow="lg" bg="#2D2D2D" border="#3B3B3B" withBorder>
                <Card.Section>
                    <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    width="100%"
                    />
                </Card.Section>
                <Card.Section>
                    <Tabs defaultValue="overview" variant="outline">
                        <Tabs.List style={{ overflowX: "auto", flexWrap: "nowrap" }}>
                            <Tabs.Tab value="overview">
                                Overview
                            </Tabs.Tab>
                            <Tabs.Tab value ="detail">
                                Detailed Description
                            </Tabs.Tab>
                            <Tabs.Tab value ="tech">
                                Tech Stack
                            </Tabs.Tab>
                            <Tabs.Tab value ="links">
                                Links
                            </Tabs.Tab>
                        </Tabs.List>


                        <Tabs.Panel value="overview">
                            {overview}
                        </Tabs.Panel>
                        <Tabs.Panel value="tech">
                            {techStack}
                        </Tabs.Panel>
                        <Tabs.Panel value="detail">
                            {details}
                        </Tabs.Panel>
                        <Tabs.Panel value="links">
                            <Container py="10px">
                                <Stack>
                                    <Text fw={700}>
                                        Project Links
                                    </Text>
                                    <Text >
                                        Everything you need to experience and explore the project.
                                    </Text>

                                    <Group gap="xs">
                                    <Text>Play the game on Itch.io: </Text><a href={itch}>{itch}</a>
                                    </Group>
                                    <Group gap="xs">
                                    <Text>Watch the gameplay on Youtube: </Text><a href={youtube}>{youtube}</a>
                                    </Group>

                                </Stack>

                                

                            </Container>
                            
                        </Tabs.Panel>


                    </Tabs>



                </Card.Section>

            </Card>

        </Container>
    );
}

export default ProjectCard;