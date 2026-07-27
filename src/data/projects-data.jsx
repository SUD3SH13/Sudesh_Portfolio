import scrapshotVideo from "../assets/videos/ScrapshotGameplayDemo.mp4";
import carnivalVideo from "../assets/videos/CarnivalSpinDemo.mp4";
import { Container,Text,List, Stack, Group } from "@mantine/core";


const projectsData = [
{
    title: "Scrapshot",
    video: scrapshotVideo,
    overview: 
    (
      <Container py="10px">
        <Stack>
        <Text>
            ScrapShot is a 2D physics-based action platformer built in Unity where players control a robot equipped with a throwable box mechanic.
        </Text>
        <Text>
          The core gameplay centers around a drag-to-aim system that allows boxes to be used for combat, environmental interactions, and puzzle solving. The project explores how a single gameplay mechanic can drive diverse challenges while encouraging creative problem-solving through physics-based interactions.
        </Text>
        </Stack>

      </Container>
    ),
    details:
    (
      <Container py="10px">

      </Container>
    ),
    techStack: 
    (
      <Container py="10px">
        <Stack>
        <Group gap="xs">
        <Text span fw={700}>Engine:</Text>
        <Text span>Unity</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Language:</Text>
        <Text span>C#</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Systems:</Text>
        <Text span>Physics-based object interaction, drag-to-aim throwing, moving platforms, button activation, enemy interactions</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Focus:</Text>
        <Text span>Physics systems, New Input System, Enemy AI, State Machine Behaviour </Text>
        </Group>

        </Stack>

      </Container>

    ),
    github: "...",
    itch: "https://sud3sh.itch.io/scrapshot",
    youtube:"",
  },
  {
    title: "Carnival Spin",
    video: carnivalVideo,
    overview:
        (
      <Container py="10px">
        <Stack>
        <Text>
            CarnivalSpin is 2D physics-based arcade game built in Unity where players control a giant carnival wheel rolling through the environment.  
        </Text>
        <Text>
            The game is built around maintaining momentum through physics-driven movement while overcoming randomly generated obstacles to beat your high score. The project explores how realistic physics and player movement can be combined to create an engaging, fast-paced gameplay experience.
        </Text>
        </Stack>

      </Container>
    ),
    details:"",
    techStack:
      (
      <Container py="10px">
        <Stack>
        <Group gap="xs">
        <Text span fw={700}>Engine:</Text>
        <Text span>Unity</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Language:</Text>
        <Text span>C#</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Systems:</Text>
        <Text span>Physics-based Movement, Object Pooling, Procedural Chunk Generation</Text>
        </Group>
        <Group gap="xs">
        <Text span fw={700}>Focus:</Text>
        <Text span>Physics systems, New Input System, Object Pooling </Text>
        </Group>

        </Stack>

      </Container>
      ),
    github: "...",
    itch:"",
    youtube:"",
  },
];

export default projectsData;