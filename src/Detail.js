import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  //const navigate = useNavigate(); // Get the navigate function

  const Navigate = useNavigate();


  const [vans, setvans] = React.useState({});

  function handleGoBack() {
    Navigate(-1); // Go back to the previous route
  }

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setvans(data.vans));
  }, [id]);

  return (
    <div>
      <img className="cody" alt="" src={vans.imageUrl} />
      <h1>{vans.name}</h1>
      <h3>{vans.description}</h3>
      <Link to={`/buy/${vans.id}`}>
        <button className="buy">Buy now</button>
      </Link>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
}
