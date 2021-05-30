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

import a from "../util/config";

import ErrorMessage from "../components/ErrorMessage";

// @Citation https://blog.logrocket.com/how-to-create-forms-with-chakra-ui-in-react-apps/
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(email);
      const res = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });
      console.log(res.headers)
      setAuthToken(res.headers);
      setLoading(false);
    } catch (error) {
      setError("Invalid username or password");
      setLoading(false);
      setEmail("");
      setPassword("");
      console.error(error);
    }
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
              <Input
                type="email"
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
            <Button width="full" mt={4} type="submit" variant="outline">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
