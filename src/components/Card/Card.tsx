import './Card.css'

const Card = (props: {
  cardData: {
    name: string | undefined
    capital: string | undefined
    language: string | undefined
    currency: string | undefined
  }
}) => {
  return (
    <div className="card">
      <img
        src={`../../../public/images/${props.cardData.name}.png`}
        alt={props.cardData.name}
      />
      <p className="bold-text">{props.cardData.name}</p>
      <p className="bold-text">
        Capital: <span>{props.cardData.capital}</span>
      </p>
      <p className="bold-text">
        Language: <span>{props.cardData.language}</span>
      </p>
      <p className="bold-text">
        Currency: <span>{props.cardData.currency}</span>
      </p>
      <a
        href={`https://en.wikipedia.org/wiki/${props.cardData.name}`}
        className="country-link"
      >
        Learn more on Wikipedia...
      </a>
    </div>
  )
}

export default Card
