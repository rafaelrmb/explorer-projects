import { Container, Profile } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<Container>
			<Link to="/">
				<span>RocketMovies</span>
			</Link>
			<Input placeholder="Pesquisar por título" type="search" />
			<Profile>
				<div>
					<p>Rafael Barbieri</p>
					<a href="/">Sair</a>
				</div>
				<Link to="/profile">
					<img src="https://github.com/rafaelrmb.png" alt="Foto de perfil" />
				</Link>
			</Profile>
		</Container>
	);
}
