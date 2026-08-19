
import { Box, Container, Group, Text, Stack} from "@mantine/core";

function Footer() {
  return (
    <Box
      py={30}
      style={{
        backgroundColor: "#2d2d2d",
        color: "white",
        borderTop: "1px solid #252a32",
      }}
      fluid
      width="100%"
    >
      <Container size="lg">
        <Group justify="space-between" align="center" >
          <Stack>
            <Text fw={600} size="lg">
              Sudesh Gadi
            </Text>

            <Text size="sm" c="dimmed">
              Gameplay Programmer | Unity Developer
            </Text>
          </Stack>

          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Sudesh Gadi
          </Text>
        </Group>
      </Container>
    </Box>
  );
}

export default Footer;

