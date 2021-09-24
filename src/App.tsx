import { useState } from 'react';

import Button from './components/Button/Button';
import Form from "./components/Form/Form";
import CriminalsField from './components/Criminals-field/CriminalsField';
import { ICriminalData } from './types';

import './App.css';

const App = () => {
  const [isFormEditing, setIsFormEditing] = useState(false);
  const [criminals, setCriminals] = useState<Array<ICriminalData>>([]);
  // const [filteredData, setFilteredData] = useState<Array<ICardData>>([...data])
  // let temporary: {
  //   id: number
  //   name: string
  //   capital: string
  //   language: string
  //   currency: string
  // }[] = []
  // const filterData = (text: string) => {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].name.toLowerCase().indexOf(text) > -1) {
  //       temporary.push(data[i]);
  //     }
  //   }

  //   temporary.length > 0
  //     ? setFilteredData([...temporary])
  //     : setFilteredData([...data])
  // }

  const handleNewCriminal = (e: any) => {
    e.preventDefault();
    setIsFormEditing(true);
  };

  const onAddCriminal = (data: ICriminalData) => {
    const newCriminals = [...criminals];
    newCriminals.push(data);
    setCriminals(newCriminals);
    setIsFormEditing(false);
    alert('New criminal was added to Database');    
  }

  const onCancelForm = () => {
    setIsFormEditing(false);
  }

  return (
    <main className="main">
      {isFormEditing && <Form onSubmit={onAddCriminal} onClose={onCancelForm} />}
      {!isFormEditing && <Button text="New Criminal" style="dark-btn" onAction={handleNewCriminal} />}
      <CriminalsField criminals={criminals}/>
    </main>
  )
}

export default App;
