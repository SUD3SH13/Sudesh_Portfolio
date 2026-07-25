import { Group, Button, Title } from "@mantine/core";

import navigation from "../data/navigation";

function Navbar() {
  return (
    <Group justify="space-between" p="lg">

      <Title order={2}>Sudesh Gadi</Title>

      <Group>

        {navigation.map((item) => (
          <Button
            key={item.id}
            variant="subtle"
          >
            {item.label}
          </Button>
        ))}

      </Group>

    </Group>
  );
}

export default Navbar;