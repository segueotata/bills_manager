import { Box, Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../db/DB_URL";
function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Desestruturação e Validações de Cliente
    const { firstName, surname, email, password, confirmPassword } = formData;

    // 1.1. Validação de campos obrigatórios
    if (!firstName || !surname || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    // 1.2. Validação de confirmação de senha
    else if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // 1.3. Validação de tamanho mínimo
    else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // 2. Preparar os Dados para o Backend
    // O backend só espera os campos definidos no DTO (sem confirmPassword)
    const dataToSubmit = {
      firstName,
      surname,
      email,
      password, // Envia a senha em texto puro para ser hasheada no NestJS
    };

    // 3. Chamada à API com Axios
    try {
      const response = await axios.post(
        `${BASE_URL}/users/register`,
        dataToSubmit
      );

      // Sucesso (Status 201 CREATED)
      console.log("Registro bem-sucedido:", response.data);
      alert("User registered successfully!");

      window.location.reload();

      // Opcional: Limpar o formulário após o sucesso
      // setformData({ firstName: "", surname: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      console.error("Erro durante o registro:", error);

      // Tratar Erros da API (ex: email já em uso)
      if (axios.isAxiosError(error) && error.response) {
        // Ex: error.response.data.message = 'Email already registered.' (vindo do NestJS)
        alert(
          `Registration failed: ${
            error.response.data.message || "An unexpected error occurred."
          }`
        );
      } else {
        alert("A network error occurred. Please try again.");
      }
    }
  };

  const help = {
    name: "Ex: John Reaper",
    email: "Ex: Email@example.com",
    password: "Ex: SenhaSegura!@#1234",
  };

  const { firstName, surname, email, password, confirmPassword } = formData;

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        marginBottom: "2em",
      }}
      onSubmit={handleFormSubmit}
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
          helperText={help.name}
          required
          fullWidth
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <TextField
          label={<PersonIcon />}
          placeholder="Surname"
          color="success"
          type="text"
          variant="filled"
          helperText={help.name}
          required
          fullWidth
          name="surname"
          value={surname}
          onChange={handleChange}
        />
      </Box>
      <TextField
        label={<AlternateEmailIcon />}
        placeholder="Email@example.com"
        color="success"
        type="email"
        variant="filled"
        helperText={help.email}
        required
        name="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        label={<PasswordIcon />}
        placeholder="Password"
        color="success"
        type="password"
        variant="filled"
        helperText={help.password}
        required
        name="password"
        value={password}
        onChange={handleChange}
      />
      <TextField
        label={<PasswordIcon />}
        placeholder="Confirm Password"
        color="success"
        type="password"
        variant="filled"
        helperText={help.password}
        required
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{
          letterSpacing: 2,
        }}
        color="success"
        type="submit"
      >
        <LoginIcon fontSize="medium" />
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
