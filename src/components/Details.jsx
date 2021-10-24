import Button from "./Button";
import './styles/Details.css'
import {useParams, useHistory} from "react-router-dom";

const Details = () => {
    const params = useParams();
	const history = useHistory();
	const handleBackClick = () => {
		history.goBack();
	}
    return (
			<>
				<h1>{params.taskTitle}</h1>
				<div class="details-info">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas accusantium iusto obcaecati voluptatum hic?
					</p>
				</div>
				<div class="back-button">
					<Button onClick={handleBackClick}>Voltar</Button>
				</div>
			</>
		);
}

export default Details;