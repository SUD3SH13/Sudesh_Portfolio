import ProjectCard from "./Project-card";
import projectsData from "../data/projects-data";
import { Stack,Title,Container } from "@mantine/core";

function Projects(){

    return (
        <Container size="lg" py={50} id="projects">
            <Title>
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