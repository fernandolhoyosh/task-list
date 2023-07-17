import { FaTasks } from "react-icons/fa";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import "./Home.css";

const Home = () => {
  const appName = "To-do list app";

  return (
    <Flex direction="column">
      <Heading
        as="h4"
        size="md"
        p="1em 0"
        textAlign="center"
        textDecoration="underline"
      >
        {appName}
      </Heading>
      <Container
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        p="1em 2.5em"
        centerContent
      >
        <Text fontSize="md">
          Welcome to your to-do list app where you can organize your to-do
          activities, you can add, update or delete tasks as well as check
          completed tasks.
        </Text>
        <FaTasks className="home-icon" />
      </Container>
    </Flex>
  );
};

export default Home;
