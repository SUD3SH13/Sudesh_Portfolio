import { Box, Container, Group, Text, Title, Anchor } from "@mantine/core";
import { IconMail, IconBrandLinkedin } from "@tabler/icons-react";

function Contact() {
  return (
    <Box
      id="contact"
      py={100}
      style={{
        backgroundColor: "#0d1117",
      }}
    >
      <Container size="md">
        <Box ta="center">
          <Text
            size="md"
            c="dimmed"
            mb={8}
          >
            Get In Touch
          </Text>

          <Title
            order={2}
            size={46}
            fw={700}
            mb={45}
          >
            Contact Me
          </Title>

          <Group
            justify="center"
            gap={35}
            wrap="wrap"
            style={{
              border: "1px solid #aaa",
              borderRadius: "32px",
              padding: "18px 28px",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <Anchor
              href="mailto:sudeshgadi1309@gmail.com"
              c="white"
              underline="never"
            >
              <Group gap={10}>
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconMail
                    size={19}
                    color="white"
                    stroke={2}
                  />
                </Box>

                <Text size="lg">
                  sudeshgadi1309@gmail.com
                </Text>
              </Group>
            </Anchor>

            <Anchor
              href="https://www.linkedin.com/in/sudesh-gadi"
              target="_blank"
              c="White"
              underline="never"
            >
              <Group gap={10}>
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconBrandLinkedin
                    size={19}
                    color="white"
                    stroke={2}
                  />
                </Box>

                <Text size="lg">
                  LinkedIn
                </Text>
              </Group>
            </Anchor>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;