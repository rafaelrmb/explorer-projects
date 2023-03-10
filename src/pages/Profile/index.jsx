import { Container, Form } from "./styles";
import { RiArrowLeftLine, RiCameraLine, RiMailLine, RiUserLine, RiLockLine } from "react-icons/ri";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
	return (
		<Container>
			<header>
				<Link to="/">
					<a>
						<RiArrowLeftLine />
						Voltar
					</a>
				</Link>
			</header>
			<Form>
				<div className="image-container">
					<img src="https://github.com/rafaelrmb.png" alt="Foto de perfil" />
					<label htmlFor="profile-img">
						<RiCameraLine />
						<input type="file" id="profile-img" />
					</label>
				</div>

				<Input placeholder="Nome" type="text" icon={RiUserLine} />
				<Input placeholder="E-mail" type="email" icon={RiMailLine} />
				<Input placeholder="Senha atual" type="password" icon={RiLockLine} />
				<Input placeholder="Nova senha" type="password " icon={RiLockLine} />
				<Button title="Salvar" type="submit" />
			</Form>
		</Container>
	);
}
