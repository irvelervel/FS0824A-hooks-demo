import { Button } from 'react-bootstrap'
import { useState } from 'react'
import NameComponent from './NameComponent'

// i React Hooks sono delle funzionalità che arricchiscono i componenti a funzione e li rendono paragonabili in termini di logica ai componenti a classe

// non è più necessario costruire un componente a classe per ad es. inserire delle funzionalità di stato

// i React Hooks più famosi, ovvero useState e useEffect sono già inseriti nella libreria di React, basta importarli con le {}

// come si utilizzano? è fondamentale imparare le 2 REGOLE DEGLI HOOKS:
// 1) i React Hooks si possono utilizzare SOLAMENTE NEI COMPONENTI A FUNZIONE
// 2) i React Hooks vanno utilizzati dentro il componente, prima del return() ma soprattutto al di fuori di cicli, funzioni, if/else (condizionali) etc.

const StateExample = () => {
  // utilizzate gli hooks qui, in piena vista!
  // useState, quando invocato, crea una "variabile di stato"
  //   const array = useState()

  //   const elementoUno = array[0]
  //   const elementoDue = array[1]

  // equivalente di:
  //   state = {
  //     counter: 0
  //   }

  const [counter, setCounter] = useState(0)
  // anche questo counter, come l'oggetto di stato nei componenti a classe,
  // è READ-ONLY! l'unico modo per aggiornare counter è passare per setCounter:
  // setCounter(nuovoValore)

  // l'aggiornamento dello stato non può avvenire al di fuori di un event listener!
  // setCounter(counter + 1) <-- provoca un loop infinito

  const [name, setName] = useState('Mario')

  return (
    <div>
      <h2>useState in React</h2>
      <p>Impariamo ad usare le variabili di stato nei componenti a funzione</p>
      <div className="d-flex justify-content-around align-items-center">
        <Button
          variant="success"
          className="px-5 fs-1"
          onClick={() => {
            setCounter(counter - 1)
          }}
        >
          -
        </Button>
        <p className="mb-0">{counter}</p>
        <div>
          <Button
            variant="success"
            className="px-5 fs-1"
            onClick={() => {
              setCounter(counter + 1)
            }}
          >
            +
          </Button>
          <Button
            variant="danger"
            className="px-5 fs-1"
            onClick={() => {
              setCounter(0)
            }}
          >
            RESET
          </Button>
        </div>
      </div>
      <div>
        <NameComponent nameProp={name} setNameFunction={setName} />
      </div>
    </div>
  )
}

export default StateExample
