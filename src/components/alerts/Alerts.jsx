import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Alerts = () => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>
    </>
  );
};

export default Alerts;
