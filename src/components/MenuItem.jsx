import { useState } from "react";

/* eslint-disable react/prop-types */
function MenuItem(plat) {
  console.log(plat)
  //create a state isFavorite that has the inital value of isFavorite that comes from the props

  const  [isFavorite, setIsFavorite] = useState(plat.isFavorite)
  // const handleClick = () => {
  //   console.log("coucou")
  //   if (isFavorite === true) {
  //     setIsFavorite(false)
  //   } else {
  //     setIsFavorite(true)
  //   }
  // }

  const handleClick = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
       
        <img src={plat.foodImage } alt={plat.description} />
        <figcaption>
          
          <h2>{plat.itemName}</h2>
         
          <p>{plat.description}</p>
        </figcaption>
      </figure>
     
      <span>{plat.price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button onClick={handleClick}>{isFavorite ? "❤️": "🖤"}</button>
    </section>
  );
}

export default MenuItem;