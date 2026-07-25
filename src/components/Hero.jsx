import { Button, Group, Stack, Text, Title, Container } from "@mantine/core";

function Hero() {
  return (
    <Container size="lg" py={100}>

      <Stack gap="md">

        <Text c="blue" fw={600}>
          Hi, I'm
        </Text>

        <Title order={1} size="4rem">
          Sudesh Gadi
        </Title>

        <Title order={3} c="dimmed">
          Gameplay Programmer | Unity Developer
        </Title>

        <Text maw={600}>
          Computer Science Graduate passionate about gameplay programming, enemy AI, and creating immersive gaming experiences using Unity and C#.
        </Text>

        <Group mt="md">
          <Button size="md">
            View Projects
          </Button>

          <Button
            variant="outline"
            size="md"
          >
            Download Resume
          </Button>
        </Group>

      </Stack>

    </Container>
  );
}

export default Hero;