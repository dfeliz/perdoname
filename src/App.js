import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import './App.css';

function App() {
  const [isJairo, setIsJairo] = useState(false);
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isForgived, setIsForgived] = useState(false)

  const [errorMessage, setErrorMessage] = useState(false);

  const validateJairo = () => {
    const input = inputText.toLowerCase();

    if (input !== "jairo") {
      setErrorMessage("No eres Jairo, por favor sal de la página.");
    } else {
      setIsJairo(true);
    }
  }

  
  const renderButton = () => (
    <div>
      Si eres Jairo, haz click aqui
      <br></br>
      <br></br>
      <Button variant="outline-light" onClick={() => setButtonPressed(true)}>
        Soy Jairo
      </Button> 
    </div>
  )

  const renderInput = () => (
    <div className="perdonamePorFavor">
      Por favor escribe tu nombre para validar
      <br></br>
      <br></br>
      <Form>
        <Form.Control
          placeholder="Jairo"
          onChange={(e) => setInputText(e.target.value)}
          isInvalid={!!errorMessage}
        />
        <Form.Control.Feedback type="invalid">
        No eres Jairo, por favor sal de la página.
        </Form.Control.Feedback>
        <br></br>
        <Button
          variant="outline-light"
          onClick={() => validateJairo()}
        >
          Confirmar
        </Button> 
      </Form>
    </div>
  )

  const renderApology = () => (
    <div>
      Jairo perdoname por favor, te lo suplico :'(
      <br></br>
      <br></br>
      <img className="perdoname" src="https://i.pinimg.com/originals/f2/c2/01/f2c201192ae1bf1c2023d01c324b1c4c.jpg" alt="meperdonas?" />
      <br></br>
      <br></br>
      <Button variant="success" onClick={() => setIsForgived(true)}>
        Te perdono { "<3" }
      </Button>
    </div>
  )

  return (
    <div className="mePerdonas">
      <div className="teLoSuplico">
        { !isForgived && (
          <>
            { !isJairo && (
              <>
                { !isButtonPressed && renderButton() }
                { isButtonPressed && renderInput() }
              </>
            )}
            { isJairo && renderApology() }
          </>
        )}
        { isForgived && (
          <>
            <ConfettiExplosion />
            Yeeeei c:
          </>
        )}
      </div>
    </div>
  );
}

export default App;
