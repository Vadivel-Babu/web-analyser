import { useState } from "react";
import "./App.css";
import { Input, Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import Performnce from "./components/Performnce";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function handleAnalyse() {
    try {
      setIsLoading(true);
      setData(null);
      const response = await axios.get(
        `http://localhost:5000/analyze?url=${url}`
      );
      setData(response.data);
      setIsLoading(false);
      toast({
        title: "success.",
        description: "Analysed",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Error.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1 className="title">Analyse your Website Performence</h1>
      <div className="flex">
        <Input
          focusBorderColor="lime"
          placeholder="Enter your Url"
          value={url}
          maxWidth={350}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          isLoading={isLoading}
          loadingText="Analysing"
          spinnerPlacement="start"
          backgroundColor={"teal"}
          color={"white"}
          size="md"
          onClick={handleAnalyse}
        >
          Analyse
        </Button>
      </div>
      {data && <Performnce data={data} />}
    </div>
  );
}

export default App;
