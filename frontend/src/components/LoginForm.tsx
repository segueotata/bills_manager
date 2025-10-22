import { Button, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react"; // 👈 Importar useState
import axios from "axios"; // 👈 Importar axios
import BASE_URL from "../../db/DB_URL";
// ⚠️ Mude esta URL para o endpoint de login configurado no NestJS

function LoginForm() {
  // 1. Estado único para capturar os dados do formulário
  const [dadosDoLogin, setDadosDoLogin] = useState({
    email: "",
    password: "",
  });

  // 2. Função para lidar com a mudança em qualquer campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosDoLogin((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  // 3. Função para lidar com a submissão e a requisição de login
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = dadosDoLogin;

    if (!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Faz a chamada POST para o backend
      // O 'credentials: true' é ESSENCIAL para a autenticação baseada em sessão,
      // pois permite que o Cookie de Sessão seja enviado e recebido.
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        dadosDoLogin,
        {
          withCredentials: true,
        }
      );

      console.log(
        "Login bem-sucedido. Session estabelecida via Cookie.",
        response.data
      );
      alert("Login successful! Redirecting to Dashboard.");

      // ⚠️ Use um hook de roteamento (ex: useRouter do Next.js ou useNavigate do React Router)
      // Para realmente redirecionar o usuário
      // Exemplo conceitual: navigate('/dashboard');
    } catch (error) {
      console.error("Erro durante o login:", error);

      if (axios.isAxiosError(error) && error.response) {
        // Trata erros de credenciais inválidas (status 401 Unauthorized)
        alert(
          `Login Failed: ${
            error.response.data.message || "Invalid credentials."
          }`
        );
      } else {
        alert("A network error occurred. Please try again.");
      }
    }
  };

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
      onSubmit={handleLoginSubmit} // 👈 Conecta a submissão ao método
    >
      <TextField
        label={<AlternateEmailIcon />}
        placeholder="Email@example.com"
        color="success"
        type="email"
        variant="filled"
        helperText={help.email.message}
        required
        // 4. Conecta o estado e o handler
        name="email"
        value={dadosDoLogin.email}
        onChange={handleChange}
      />
      <TextField
        label={<PasswordIcon />}
        placeholder="Password"
        color="success"
        type="password"
        variant="filled"
        helperText={help.password.message}
        required
        // 4. Conecta o estado e o handler
        name="password"
        value={dadosDoLogin.password}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{
          letterSpacing: 2,
        }}
        color="success"
        type="submit" // 👈 Altera o onClick para type="submit"
      >
        <LoginIcon fontSize="medium" /> Login
      </Button>
    </form>
  );
}

export default LoginForm;
