import React from "react";

import { Link, useSearchParams } from "react-router-dom";

export default function Flower() {
  const [vans, setpushp] = React.useState([]);

    const[search, setsearch] = useSearchParams()

     const typefilter = search.get("type")

     //console.log(typefilter)

     const dristi = typefilter?vans.filter(van => van.type === typefilter): vans

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())

      .then((data) => setpushp(data.vans));
  }, []);

  const render = dristi.map((pre, index) => (
    <div>
      <Link to={`/detail/${pre.id}`} className="link-design">
        <div className="design">
          <img className="native" alt="" src={pre.imageUrl} />

          <div className="tan">
            <h3>{pre.name}</h3>

            <h4 className="price">{pre.price}₽</h4>
          </div>
        </div>

        <div className="text"></div>
      </Link>
    </div>
  ));

  return (
  
  
  <div className="king1">


    <nav className="gaurimaa">

  <Link to="?type=simple"  className="simple1">Simple</Link>
  <Link to="?type=rugged"  className="simple2">Rugged</Link>
  <Link to="?type=luxury" className="simple3">Luxury</Link>


    </nav>

    <div className="king">
  
  
  {render}

  </div>
  
  
  </div>
  
  );
}
