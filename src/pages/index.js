import {
  Link as ChakraLink,
  Text,
  Flex,
  Stack,

} from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import axios from 'axios'

const Index = () => {
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const [mailingListErrMsg, setMailingListErrMsg] = useState("");
  const [info, setInfo] = useState({
    email: '',
    name: ''
  })

  const login = async () =>{

    try {
      
      const res = await axios.post("http://localhost:5000/login", {
        email: info.email
      })
      console.log(res.data)  
      
      
    } catch (error) {
      setLoginErrorMsg("User not found. Sign up to continue")
    }


    
  }

  const addToMailingList = async () =>{
    
  }


  return (
    <Flex
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gridGap="10"
      backgroundColor="gray.800"
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Card btnText="Login" type="login" errorMsg={loginErrorMsg} onClick={login} onChange={ (e) => setInfo({email: e.target.value})} loading={loading}  />
        <Card btnText="Sign up" onClick={addToMailingList} errorMsg={mailingListErrMsg} onChange={ (e) => setInfo({email: e.target.value, name: info.name})} onChangeName={ (e) => setInfo({name: e.target.value, email: info.email}) } loading={loading} />
      </Stack>
      <Text fontSize="xs" color="white">
        The Real Bootcamp 2021 Notion API Demo
        <Text textAlign="center" color="green.200" fontSize="xs">
          <a
            target="_blank"
            href="https://www.notion.so/092c3ec283d043e8aee78b01bc2807bf?v=ef91eaeba496495eb22282d0198f0373"
          >
            See the mailing list
          </a>
        </Text>
      </Text>
    </Flex>
  );
};

export default Index;
