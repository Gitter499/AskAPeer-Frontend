import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

// @Citation https://blog.logrocket.com/how-to-create-forms-with-chakra-ui-in-react-apps/
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post()
  };
  return (
    <Flex mt={12} width="full" align="center" justifyContent="center">
      <Box
        p={10}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>

        <Box my={3} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="example@example.com" onChange={e => setEmail(e.currentTarget)} />
            </FormControl>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="John" onChange={e => setFirstName(e.currentTarget)} />
            </FormControl>{" "}
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Smith"  onChange={e => setLastName(e.currentTarget)}/>
            </FormControl>{" "}
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="JohnSmith1337" onChange={e => setUsername(e.currentTarget)}/>
            </FormControl>{" "}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" onChange={e => setPassword(e.currentTarget)} />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              variant="outline"
            >
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
