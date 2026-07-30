import { Group, Button, Title, Container,Image,Text } from "@mantine/core";
import iconDownload from "../assets/images/icon-download.png"

import navigation from "../data/navigation";

function Navbar() {
  return (
    <Container fluid  style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(13, 17, 23, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "0px solid rgba(255,255,255,0.08)",
      }}>
    <Group justify="space-between" p="lg">

      <Title order={2}>Sudesh Gadi</Title>

      <Group >

        {navigation.map((item) => (
          <Button
            key={item.id}
            variant="subtle"
            href={item.href}
            component="a"
            // size={{base: "xs", md:"sm"}}
            size="sm"
            // leftSection={ <Image src={item.icon} fit="contain" w={16} h={16}/>}
             px={{ base: 6, md: 12 }}
            //  w={{ base: 30, md: "auto" }}
          >
            <Group gap="xs">
              <Image
                src={item.icon}
                fit="contain"
                w={16}
                h={16}
                // hiddenFrom="md"
              />
            <Text
              span
              visibleFrom="md"
            >
              {item.label}
            </Text>
            </Group>
          </Button>
        ))}

          <Button 
          size="sm" 
          component="a" 
          href="/GameDev-resume.pdf" 
          download 
          // rightSection={ <Image src={iconDownload} fit="contain" w={16} h={16}/>} 
          // w={{ base: 30, md: "auto" }}
          px={{base:4, md: 12}}
          >
            <Group gap="xs">

            <Text
              span
              visibleFrom="md"
            >
              Download Resume
            </Text>

            <Image
                src={iconDownload}
                fit="contain"
                w={16}
                h={16}
                // hiddenFrom="md"
              />
            </Group>
          </Button>

      </Group>

    </Group>
    </Container>
  );
}

export default Navbar;
