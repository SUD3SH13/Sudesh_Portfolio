import { Button, Group, Stack, Text, Title, Container } from "@mantine/core";

function Hero() {
  return (
    <Container id ="home" fluid size="lg" py={100} px={{base:25, md:50}}>

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
          Computer Science Graduate focused on building gameplay systems, interactive systems, and immersive mechanics using Unity and C#. Passionate about designing robust systems that bring engaging game experiences to life.
        </Text>

        <Group mt="md">
          <Button size="md" component="a" href="#projects">
            View Projects
          </Button>

          <Button
            variant="outline"
            size="md"
            href="/GameDev-resume.pdf"
            target="_blank"
            component="a"
          >
            View Resume
          </Button>
        </Group>

      </Stack>

    </Container>
  );
}

export default Hero;