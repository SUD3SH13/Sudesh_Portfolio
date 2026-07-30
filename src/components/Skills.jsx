import skillsData from "../data/skills-data";
import { Badge, Group, Stack, Title, Container} from "@mantine/core";

function Skills() {
  return (
    <Container fluid  pt={100} id="skills" px={{base:25, md:50}}>
        <Title pb={25}>
            Technical Skills
        </Title>
        <Stack>
        {skillsData.map((category) => (
            <div key={category.title}>
            <Title order={3} mb="sm">
                {category.title}
            </Title>

            <Group gap="sm">
                {category.skills.map((skill) => (
                <Badge key={skill} size="md" variant="light" color="cyan" radius="sm">
                    {skill}
                </Badge>
                ))}
            </Group>
            </div>
        ))}
        </Stack>
    </Container>
  );
}

export default Skills;