import { Container, Grid, Stack, Title, Text, Badge, Group } from "@mantine/core";

function About() {
  return (
    <Container size="lg" py={100} id="about">

      <Grid align="center">

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={2}>
            About Me
          </Title>

          <Text mt="lg" c="dimmed">
            I'm a Computer Science student with a passion for gameplay programming,
            AI systems, and interactive experiences. I enjoy designing mechanics,
            implementing enemy behaviour, and building polished gameplay systems in Unity.
          </Text>

          <Text mt="md" c="dimmed">
            Alongside game development, I've worked with React during my frontend internship,
            giving me experience building responsive web applications as well.
          </Text>
        </Grid.Col>

        {/* <Grid.Col span={{ base: 12, md: 6 }}>

          <Stack>

            <Title order={4}>
              Focus Areas
            </Title>

            <Group>
              <Badge size="lg">Unity</Badge>
              <Badge size="lg">C#</Badge>
              <Badge size="lg">Gameplay</Badge>
              <Badge size="lg">Enemy AI</Badge>
              <Badge size="lg">React</Badge>
              <Badge size="lg">Git</Badge>
            </Group>

          </Stack>

        </Grid.Col> */}

      </Grid>

    </Container>
  );
}

export default About;