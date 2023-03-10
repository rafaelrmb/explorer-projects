import { Container, Form, Background } from "../SignIn/styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RiMailLine, RiLockLine, RiUserLine } from "react-icons/ri";

export function SignUp() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir!</p>
				<p>Criar sua conta</p>
				<Input placeholder="Nome" type="text" icon={RiUserLine} />
				<Input placeholder="Email" type="email" icon={RiMailLine} />
				<Input placeholder="Senha" type="password" icon={RiLockLine} />
				<Button title="Cadastrar" />
				<a href="/">Já possui uma conta? Faça login</a>
			</Form>
			<Background />
		</Container>
	);
}
