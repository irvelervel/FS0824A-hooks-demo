// useEffect è l'hook di React che sostituisce:
// - componentDidMount
// - componentDidUpdate
// - (componentWillUnmount) <- non trattato a lezione
// ...nei componenti a funzione.

import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

// come si utilizzano? è fondamentale imparare le 2 REGOLE DEGLI HOOKS:
// 1) i React Hooks si possono utilizzare SOLAMENTE NEI COMPONENTI A FUNZIONE
// 2) i React Hooks vanno utilizzati dentro il componente, prima del return() ma soprattutto al di fuori di cicli, funzioni, if/else (condizionali) etc.

const EffectComponent = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  // useEffect viene invocato con una funzione. Questa funzione viene lanciata
  // all'avvio del componente, ma anche ad OGNI AGGIORNAMENTO del componente
  useEffect(() => {
    console.log('INVOCATO PRIMO USEEFFECT')
  })

  // andiamo però ora ad analizzare uno useEffect con 2 parametri
  useEffect(() => {
    console.log('INVOCATO SECONDO USEEFFECT')
    // come un componentDidUpdate che viene eseguito solamente alla variazione di
    // counter2
  }, [counter2])

  // sarebbe come un:
  //    componentDidUpdate(prevProps, prevState){
  // if(prevState.counter2 !== this.state.counter2){
  //    in entrambi i casi stiamo ascoltando delle differenze nel valore di counter2
  //    }
  // }

  useEffect(() => {
    console.log('COMPONENTDIDMOUNT')
    // dando una lista vuota di dipendenze a questo useEffect, stiamo in sostanza fornendo ZERO MOTIVAZIONI per la sua ri-esecuzione.
  }, [])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={() => {
            setCounter1(counter1 + 1)
          }}
        >
          Valore counter 1: {counter1}
        </Button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <Button
          onClick={() => {
            setCounter2(counter2 + 1)
          }}
        >
          Valore counter 2: {counter2}
        </Button>
      </div>
    </>
  )
}

export default EffectComponent
