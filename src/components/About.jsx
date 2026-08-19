  import { Container, Grid, Stack, Title, Text, Badge, Group } from "@mantine/core";

  function About() {
    return (
      <Container w="100%" fluid  pt={100} id="about" px={{base:25, md:50}}>

        <Grid align="center">

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>
              About Me
            </Title>

            <Text mt="lg" c="dimmed">
              I'm a Computer Science Graduate passionate about gameplay programming, 
              AI systems, and interactive experiences. I enjoy designing mechanics, building robust gameplay systems, and creating engaging experiences in Unity.
            </Text>

            <Text mt="md" c="dimmed">
              Beyond game development, I've worked on computer vision projects involving AI and image processing, including research that led to a published research paper. I also have experience with React from my frontend internship, where I worked on building responsive web applications.
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