import "./Loading.css";
import { useColorModeValue } from "@chakra-ui/react";

const Loading = () => {

  const spinnerColor = useColorModeValue("black","white");

  return (
    <main className="content-spinner">
            <h5>Loading...</h5>
        <div style={{borderTopColor:spinnerColor,}} className="loading-spinner">
        </div>
    </main>

  );
};

export default Loading;
