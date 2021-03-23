import React, { useState } from "react"

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 280)}...`}
          <button className="toggle-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour