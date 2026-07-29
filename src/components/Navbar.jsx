import { Group, Button, Title } from "@mantine/core";

import navigation from "../data/navigation";
// hello
function Navbar() {
  return (
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
  );
}

export default Navbar;
