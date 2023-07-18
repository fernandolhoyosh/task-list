import "./Header.css";
import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <header>
        <Heading
          as="h4"
          size="md"
          textAlign="center"
          textDecoration="underline"
        >
          Task List
        </Heading>
      </header>
      <div className="text-header">
        <p>
          <strong>Note: </strong>
          The add a description field is not mandatory, if you add it you can
          see the description of the task by hovering the cursor over the task.
        </p>
      </div>
    </>
  );
}

export default Header;
