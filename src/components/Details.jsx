import Button from "./Button";
import '../styles/Details.css'

const Details = () => {
	const handleBackClick = () => {
	}
    return (
			<>
				{/* <h1>{params.taskTitle}</h1> */}
				<div className="details-info">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
						quas accusantium iusto obcaecati voluptatum hic?
					</p>
				</div>
				<div className="details-end">
					<div className="back-button">
						<Button onClick={handleBackClick}>Voltar</Button>
					</div>
				</div>
			</>
		);
}

export default Details;