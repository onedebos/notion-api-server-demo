import { Flex, Text, Button, Input } from "@chakra-ui/react";

export default function Card({ type, btnText, onClick, errorMsg, onChange, onChangeName }) {
  return (
    <Flex
      height="400px"
      backgroundColor="gray.100"
      width="400px"
      rounded="lg"
      justifyContent="center"
      mr="10"
      direction="column"
      px="5"
      gridGap="5"
    >
      {type != "login" && (
        <Text fontWeight="semibold" color="gray.600" textAlign="center" fontSize="lg">
          {" "}
          Sign up to see courses!{" "}
        </Text>
      )}

      {type == "login" && (
        <Text fontWeight="semibold" color="gray.600" textAlign="center" fontSize="lg">
          {" "}
          Login to see courses!
        </Text>
      )}
      <Input borderColor="gray.500" placeholder="enter your e-mail" type="email" onChange={onChange} />
      {type != "login" && (
        <Input placeholder="enter your name" borderColor="gray.500" type="text" onChange={onChangeName} />
      )}
      <Button colorScheme="whatsapp" color="gray.700" onClick={onClick}>
        {" "}
        {btnText}{" "}
      </Button>

      <Text fontSize="xs" color="red.600" textAlign="center">
        {errorMsg}
      </Text>
    </Flex>
  );
}
