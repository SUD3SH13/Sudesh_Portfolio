import scrapshotVideo from "../assets/videos/ScrapshotGameplayDemo.mp4";
import carnivalVideo from "../assets/videos/CarnivalSpinDemo.mp4";
import upgradeVideo from "../assets/videos/UpgradeLoopDemo.mp4";
import autonomousVideo from "../assets/videos/AutonomousVehicleDemo.mp4";
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
    youtube:"https://youtu.be/6V4FyrsUfmU",
  },
  {
    title: "Upgrade Loop (In Development)",
    video: upgradeVideo,
    overview:
        (
      <Container py="10px">
        <Stack>
        <Text>
            Upgrade Loop is a 3D shooter survival game built in Unity where players fight waves of robots to earn coins and improve their arsenal.
        </Text>
        <Text>
            The core gameplay centers around fast-paced shooting and a progression system where coins earned from combat can be spent on weapon and skill upgrades. Players must strategically choose upgrades to strengthen their build and survive increasingly challenging waves of enemies.
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
    itch:"https://sud3sh.itch.io/carnivalspin",
    youtube:"https://youtu.be/63waVvT1Fkg",
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
    itch:"https://sud3sh.itch.io/carnivalspin",
    youtube:"https://youtu.be/63waVvT1Fkg",
  },
  {
    title: "AI-Powered Autonomous Vehicle",
    video: autonomousVideo,
    overview:
        (
      <Container py="10px">
        <Stack>
        <Text>
            An AI-powered autonomous vehicle built using Raspberry Pi, Arduino, sensors, and computer vision for autonomous navigation in indoor and outdoor environments. The system combines custom-trained YOLOv11 for real-time traffic signal and sign detection with sensor-based obstacle avoidance, indoor mapping.
        </Text>
        <Text>
            The project combines computer vision, embedded systems, and autonomous control, and was further documented through a research paper published on IEEE.
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
            <Text span fw={700}>Hardware:</Text>
            <Text span>Raspberry Pi, Arduino, Ultrasonic Sensors, Camera</Text>
          </Group>

          <Group gap="xs">
            <Text span fw={700}>AI / Vision:</Text>
            <Text span>YOLOv11, OpenCV, Computer Vision</Text>
          </Group>

          <Group gap="xs">
            <Text span fw={700}>Navigation:</Text>
            <Text span>GPS, Indoor Mapping, Obstacle Avoidance</Text>
          </Group>

          <Group gap="xs">
            <Text span fw={700}>Communication:</Text>
            <Text span>Python, Socket Streaming</Text>
          </Group>
        </Stack>
      </Container>
      ),
    github: "...",
    itch:"https://sud3sh.itch.io/carnivalspin",
    youtube:"https://youtu.be/63waVvT1Fkg",
  },
];

export default projectsData;