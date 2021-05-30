import React from "react";
import { Box, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

// @Citation https://blog.logrocket.com/how-to-create-forms-with-chakra-ui-in-react-apps/
export default function ErrorMessage({ message }) {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>Error: {message}</AlertDescription>
      </Alert>
    </Box>
  );
}
