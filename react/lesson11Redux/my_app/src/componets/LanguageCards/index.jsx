import React from 'react'
import { addCard } from '../../store/reducers/languageCardsReducer';
import { useDispatch, useSelector } from 'react-redux'
import LanguageCard from '../LanduageCard';


export default function LanguageCards() {

  const state = useSelector(state => state.languageCards);

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { rus, eng} = event.target;
    dispatch(addCard({
        rus: rus.value,
        eng: eng.value
    }));
    rus.value = '';
    eng.value = '';
}
    
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='rus' placeholder='Rus' />
            <input type="text" name='eng' placeholder='Eng' />
            <button>Add</button>
        </form>

        <div>
          {
            state.map(el => <LanguageCard key={el.id} {...el}/>)
          }
        </div>
    </div>
  )
}
