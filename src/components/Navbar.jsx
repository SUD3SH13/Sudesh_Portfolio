import { Group, Button, Title, Container } from "@mantine/core";

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

      <Group>

        {navigation.map((item) => (
          <Button
            key={item.id}
            variant="subtle"
            href={item.href}
            component="a"
          >
            {item.label}
          </Button>
        ))}

          <Button size="sm" component="a" href="/GameDev-resume.pdf" download>
            Download Resume
          </Button>

      </Group>

    </Group>
    </Container>
  );
}

export default Navbar;
