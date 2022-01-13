import './App.css';
import React, {useState, useEffect } from 'react';
import Modal from 'react-modal';
import Botao from './components/Button';
import ModalComponent from './components/ModalComponent';
import axios from 'axios';
import ModalCircularProgress from './components/ModalCircularProgress';


function App() {
  const [email, setEmail] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalBack, setModalBack] = useState("red")
  const [modalPredict, setModalPredict] = useState("Spam")
  const [circularProgress, setCircularProgress] = useState(false)

  function openModal() {
    //console.log('openModal')
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleOnChange = (event) => {
    setEmail(event.target.value);
  }

    const verifyEmail = () =>{
    console.log('entrada: ', email)

    if(!email)
    {
      console.log('Entrada Vazia')
      return;
    }
    
    setCircularProgress(true)
    axios.post('https://spam-filter-backend.herokuapp.com/predict',
    {
      entrada: email,
    },
    {
      headers: {
          "Content-Type": "application/json",
        }
    }
    ).then(res => {
        console.log('worked')
        console.log('data', res.data)
        return res.data
      })
      .then(res => {
        if(res === 'spam')
        {
          setModalBack('red')
          setModalPredict('Spam')
        }
        else {
          setModalBack('green')
          setModalPredict('Ham')
        }
      })
      .then(() => openModal())
      .catch(error => {
        console.log('erro', error)
      })
      .then(() => {
        console.log('Terminated')
        setCircularProgress(false)
        }
      )
  }

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <div className="App">

      <div className="Describe">
        <p>Spam Filter Model based on the content of the message and how often the words within that message occur in spam and ham messages.
        </p>
        <p>
          Type in you message to be evaluated.
        </p>
      </div>

      <div>
        <form>
            <textarea
              rows="5" cols="30"
              placeholder="Type in your email"
              value={email}
              onChange={handleOnChange} />
        </form>
      </div>

      <div>

        <Botao
          content="Verify Email"
          background="purple"
          color="white"
          onClick={verifyEmail}
        />

      </div>

      <ModalComponent
        background={modalBack}
        predict={modalPredict}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />

      {
        circularProgress
        ? <ModalCircularProgress modalIsOpen={circularProgress}/>
        : null
      }

    </div>
  );
}

export default App;
