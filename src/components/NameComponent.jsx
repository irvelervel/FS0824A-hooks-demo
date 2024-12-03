import { Button } from 'react-bootstrap'

const NameComponent = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        {/* dal figlio invoco "setName" nel componente StateExample */}
        <Button onClick={() => props.setNameFunction('Mario')}>Mario</Button>
        <Button onClick={() => props.setNameFunction('Luigi')}>Luigi</Button>
      </div>
      <div>
        <p>Il nome è: {props.nameProp}</p>
        {/* valore iniziale: "Mario" */}
      </div>
    </>
  )
}

export default NameComponent
