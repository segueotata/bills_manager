import { Box, Button, Container, Typography } from "@mui/material";
// import PaymentsIcon from "@mui/icons-material/Payments";

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import type { User } from "./interfaces/UserInterface";

function App() {
  const [formState, setFormState] = React.useState<Boolean>(true);
  const [data, setData] = useState<User>();
  return (
    <Container>
      <Typography
        variant="h1"
        sx={{
          letterSpacing: 2,
        }}
      >
        Hello, World!
      </Typography>

      <Box>
        <Typography variant="h3" gutterBottom>
          This is a simple application for helping with the bills.
        </Typography>
      </Box>

      <Box maxWidth="50%">
        {formState ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}

        <Button
          onClick={() => {
            setFormState(!formState);
          }}
          variant="outlined"
          color="success"
        >
          Already have an account? {formState ? "Register" : "Login"}
        </Button>
      </Box>
    </Container>
  );
}

export default App;
