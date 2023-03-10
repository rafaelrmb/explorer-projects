import { RiAddFill, RiCloseFill } from "react-icons/ri";
import { Container } from "./styles";

export function MovieTag({ isNew, value, onClick, icon: Icon, ...rest }) {
	return (
		<Container isNew={isNew}>
			{Icon && <Icon size={20} />}
			<input type="text" value={value} readOnly={!isNew} {...rest} />
			<button onClick={onClick}>{isNew ? <RiAddFill /> : <RiCloseFill />}</button>
		</Container>
	);
}
