import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";

const Details = () => {
  const { title } = useParams()
  const handleBackClick = () => {};
  return (
    <>
      <h1 className="truncate">{title}</h1>
      <div className="flex-wrap h-full px-4 py-5 mx-5 text-center rounded-md bg-zinc-600">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quas accusantium iusto obcaecati voluptatum hic?
        </p>
      </div>
      <div className="flex items-end justify-end p-4">
        <Link to="../">
          <div className="">
            <Button onClick={handleBackClick}>Back</Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Details;
