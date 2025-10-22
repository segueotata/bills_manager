import { Box, Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const help = {
    name: {
      message: "Ex: John Reaper",
    },
    email: {
      message: "Ex: Email@example.com",
    },
    password: {
      message: "Ex: SenhaSegura!@#1234",
    },
    confirmPassword: {
      message: "Ex: SenhaSegura!@#1234",
    },
  };

  //   PARAMOS AQUI
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "2em",
      }}
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <TextField
          label={<PersonIcon />}
          placeholder="Name"
          color="success"
          type="text"
          variant="filled"
          helperText={help.name.message}
          required
          fullWidth
        />
        <TextField
          label={<PersonIcon />}
          placeholder="Surname"
          color="success"
          type="text"
          variant="filled"
          helperText={help.name.message}
          required
          fullWidth
        />
      </Box>
      <TextField
        label={<AlternateEmailIcon />}
        placeholder="Email@example.com"
        color="success"
        type="email"
        variant="filled"
        helperText={help.email.message}
        required
      />
      <TextField
        label={<PasswordIcon />}
        placeholder="Password"
        color="success"
        type="password"
        variant="filled"
        helperText={help.password.message}
        required
      />
      <TextField
        label={<PasswordIcon />}
        placeholder="Confirm Password"
        color="success"
        type="password"
        variant="filled"
        helperText={help.password.message}
        required
      />
      <Button
        variant="contained"
        sx={{
          letterSpacing: 2,
        }}
        color="success"
        onClick={() => {
          alert("Redireciona para a página do dashboard.");
        }}
      >
        <LoginIcon fontSize="medium" /> Register
      </Button>
    </form>
  );
}

export default RegisterForm;
