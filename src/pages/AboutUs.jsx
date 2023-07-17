/* import "./AboutUs.css"; */
import { Container, Flex, Heading } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Flex direction="column">
      <Heading
        as="h4"
        size="md"
        p="1em 0"
        textAlign="center"
        textDecoration="underline"
      >
        About Us
      </Heading>
      <Heading as="h5" size="sm" p=".5em .5em">
        App features:
      </Heading>
      <Container
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        p="1em 2.5em"
      >
        <ul className="funtion-list">
          <li>Add tasks</li>
          <li>Adding a description to a task (Not required)</li>
          <li>Validate the form</li>
          <li>Mark a task as completed or pending</li>
          <li>Delete tasks from the list button</li>
          <li>Save and read tasks and their status in the localStorage</li>
          <li>Update the name of a task</li>
          <li>Delete a specific task</li>
          <li>Counter of tasks with pending status</li>
          <li>Navigation menu</li>
        </ul>
      </Container>
      <Heading as="h5" size="sm" p=".5em .5em">
        Technologies used in the app:
      </Heading>
      <Container
        border="1px"
        borderColor="gray.200"
        borderRadius="10px"
        p="1em 2.5em"
      >
        <ul className="funtion-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>React Router</li>
          <li>React Lazy</li>
          <li>React icons</li>
        </ul>
      </Container>
    </Flex>
  );
};

export default AboutUs;
