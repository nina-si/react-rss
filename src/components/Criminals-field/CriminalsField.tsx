import Card from '../Card/Card';

import './CriminalsField.css';
import { ICriminalData } from '../../types';

const CriminalsField = (props: { criminals: ICriminalData[] }) => {
  const getCriminalCards = () => {
    let criminalCards = props.criminals.map((criminal) => {
      return (
        <Card
          criminal={criminal}
          key={criminal.firstName + criminal.lastName}
        />
      );
    });
    return criminalCards;
  };

  return (
    <section className="cards">
      {props.criminals && props.criminals.length > 0 ? (
        getCriminalCards()
      ) : (
        <p className="announce">Prison is empty</p>
      )}
    </section>
  );
};

export default CriminalsField;
