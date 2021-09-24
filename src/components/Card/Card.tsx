import { ICriminalData } from '../../types'
import './Card.css'

const Card = (props: { criminal: ICriminalData}) => {
  return (
    <div className="card">
      <h2>{`${props.criminal.firstName} ${props.criminal.lastName}`}</h2>
      <p>{props.criminal.gender}</p>
      <p>{props.criminal.birthdate}</p>
      {!props.criminal.firstCrime && <p className="dangerous">Highly dangerous</p>}
      {props.criminal.cooperation && <p className="ready">Appoint an interrogation</p>}
      
    </div>
  )
}

export default Card
