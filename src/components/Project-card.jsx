import { Container, Card,Image,Tabs, Title,Text,Group,Stack} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { base } from "framer-motion/client";
// import demoVideo from "../assets/videos/ScapshotGameplayDemo.mp4";

function ProjectCard({video, overview,techStack,details,links}){
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

                            {links}
                            
                        </Tabs.Panel>


                    </Tabs>



                </Card.Section>

            </Card>

        </Container>
    );
}

export default ProjectCard;