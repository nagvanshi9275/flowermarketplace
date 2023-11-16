

import React from "react"

import {useParams} from "react-router-dom"

export default function Buy(){

  const {id} = useParams()

  const[vans, setvans] = React.useState({})

  React.useEffect(() => {

    fetch(`/api/vans/${id}`)

    .then(res => res.json())

    .then(data => setvans(data.vans))



  }, [id])

    return(

      <div>

        <img className="flo2" alt="" src={vans.imageUrl}/>

      <h1>{vans.name}</h1>

      <h2>Pay with</h2>

      <div>

     <img className="pal" alt="" src="https://i.postimg.cc/5yDp3w5w/paypal.png"/>

    <img className="gpay" alt="" src="https://i.postimg.cc/GpNZNsjm/g-pay.webp"/>

     <img className="master" alt="" src="https://i.postimg.cc/bYCSDyL9/matercard.png"/>

      </div>



      </div>





    )




}
















