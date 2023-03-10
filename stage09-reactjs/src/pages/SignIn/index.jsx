import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { RiMailLine, RiLockLine } from "react-icons/ri";

export function SignIn() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir!</p>
				<p>Faça seu login na plataforma</p>
				<Input placeholder="Digite seu email" type="email" icon={RiMailLine} />
				<Input placeholder="Digite sua senha" type="password" icon={RiLockLine} />
				<Button title="Entrar" />
				<a href="/">Criar conta</a>
			</Form>
			<Background />
		</Container>
	);
}
