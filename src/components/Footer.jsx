
import { Box, Container, Group, Text } from "@mantine/core";

function Footer() {
  return (
    <Box
      py={30}
      style={{
        backgroundColor: "#2d2d2d",
        color: "white",
        borderTop: "1px solid #252a32",
      }}
    >
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Box>
            <Text fw={600} size="lg">
              Sudesh Gadi
            </Text>

            <Text size="sm" c="dimmed">
              Gameplay Programmer | Unity Developer
            </Text>
          </Box>

          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Sudesh Gadi
          </Text>
        </Group>
      </Container>
    </Box>
  );
}

export default Footer;

