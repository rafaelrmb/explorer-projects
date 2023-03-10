import { Container } from "./styles";
import { Tag } from "../../components/Tag";
import { RiStarFill, RiStarLine } from "react-icons/ri";

export function MovieCard({ data, ...rest }) {
	const rating = Math.round(data.rating); // round the rating to the nearest integer
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			stars.push(<RiStarFill key={i} />);
		} else {
			stars.push(<RiStarLine key={i} />);
		}
	}

	return (
		<Container {...rest}>
			<h2>{data.title}</h2>
			<div className="rating">{stars}</div>
			<p id="description">{data.description}</p>
			<div className="tags">
				{data.tags.map((tag) => (
					<Tag key={tag.id} title={tag.name} />
				))}
			</div>
		</Container>
	);
}
