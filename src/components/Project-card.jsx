import { Container, Card,Image,Tabs, Title} from "@mantine/core";
// import demoVideo from "../assets/videos/ScapshotGameplayDemo.mp4";

function ProjectCard({video, overview,techStack,details,itch}){
    return(
        <Container>
            <Card>
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
                    <Tabs defaultValue="overview" variant="outline" >
                        <Tabs.List>
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
                            <a href={itch}>Play Game</a>
                        </Tabs.Panel>


                    </Tabs>



                </Card.Section>

            </Card>

        </Container>
    );
}

export default ProjectCard;