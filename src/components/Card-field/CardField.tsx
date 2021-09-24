import Card from '../Card/Card'

import './CardField.css'

const CardField = (props: { cards: any[] }) => {
  let filteredCards = props.cards.map((item) => {
    return <Card cardData={item} key={item.id} />
  })

  return <main className="cards">{filteredCards}</main>
}

export default CardField
