import { Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import LoginIcon from "@mui/icons-material/Login";

function LoginForm() {
  const help = {
    email: {
      message: "Ex: Email@example.com",
    },
    password: {
      message: "Ex: SenhaSegura!@#1234",
    },
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "2em",
      }}
    >
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
        <LoginIcon fontSize="medium" /> Login
      </Button>
    </form>
  );
}

export default LoginForm;
