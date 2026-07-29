import ProjectCard from "./Project-card";
import projectsData from "../data/projects-data";
import { Stack,Title,Container,Tabs } from "@mantine/core";

function Projects(){

    return (
        <Container size="lg" py={50} id="projects" px={50}>
            <Title pb={25}>
                Projects
            </Title>

            {/* <Tabs defaultValue="game">
                <Tabs.List py={25}>
                    <Tabs.Tab value="game">
                        Game Projects
                    </Tabs.Tab>
                    <Tabs.Tab value= "software">
                        Software Projects
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="game">
                    <Stack gap="xl">
                        {projectsData.map((project) => (
                            <Container key={project.title} size="lg">
                            <Title order={2} mb="md">
                                {project.title}
                            </Title>

                            <ProjectCard {...project} />
                            </Container>
                        ))}
                    </Stack>

                </Tabs.Panel>

                <Tabs.Panel value="software">

                </Tabs.Panel>


            </Tabs> */}

                    <Stack gap="xl">
                        {projectsData.map((project) => (
                            <Container key={project.title} size="lg">
                            <Title order={2} mb="md">
                                {project.title}
                            </Title>

                            <ProjectCard {...project} />
                            </Container>
                        ))}
                    </Stack>

    

        </Container>
  );

    

}

export default Projects;