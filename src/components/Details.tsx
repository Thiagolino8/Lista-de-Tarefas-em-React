import Button from "./Button";

const Details = () => {
	const handleBackClick = () => {
	}
    return (
			<>
				{/* <h1 clasname="truncate">{params.taskTitle}</h1> */}
				<div className="bg-zinc-600 mx-5 px-4 py-5 rounded-md h-full text-center truncate">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
						quas accusantium iusto obcaecati voluptatum hic?
					</p>
				</div>
				<div className="flex justify-end items-end">
					<div className="w-6">
						<Button onClick={handleBackClick}>Voltar</Button>
					</div>
				</div>
			</>
		);
}

export default Details;
