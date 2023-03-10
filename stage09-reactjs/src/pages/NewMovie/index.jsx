import { RiArrowLeftLine } from "react-icons/ri";
import { Container, Form, Section } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { MovieTag } from "../../components/MovieTag";
import { Link } from "react-router-dom";

export function NewMovie() {
	return (
		<Container>
			<Header />
			<main>
				<Link to="/">
					<a>
						<RiArrowLeftLine />
						Voltar
					</a>
				</Link>
				<Form>
					<h2>Novo filme</h2>
					<Input placeholder="Título" type="text" />
					<Input placeholder="Sua nota (de 0 a 5)" type="number" min="0" max="5" />
					<TextArea placeholder="Observações" />
					<Section>
						<span>Marcadores</span>
						<div id="tags">
							<MovieTag value="Action" />
							<MovieTag value="Comedy" />
							<MovieTag value="Novo marcador" isNew={true} />
						</div>
					</Section>
					<Button title="Excluir filme" id="delete-btn" />
					<Button title="Salvar alterações" />
				</Form>
			</main>
		</Container>
	);
}
