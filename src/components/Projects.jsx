import ProjectCard from "./Project-card";
import projectsData from "../data/projects-data";
import { Stack,Title,Container,Tabs } from "@mantine/core";

function Projects(){

    return (
        <Container fluid  pt={100} id="projects" px={{base:25, md:50}}>
            <Title pb={25}>
                Projects
            </Title>

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