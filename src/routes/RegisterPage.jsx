import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../modals/Register';

function RegisterPage() {

    const handleSubmit = (registerData) => {
        const API_URL = 'http://localhost:8080';
        console.log('Dados do formulário:', registerData);
        
        fetch(API_URL + '/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Resposta do servidor:', data);
        })
        .catch(error => {
          console.error('Erro ao enviar dados:', error);
        });
      };


      return (
        <div className= 'principal'>
          <div className='father'>
          </div>
          <Register onSubmit={handleSubmit} />
          <div className='back'>
            <Link to="/">
              <button>Voltar para página inicial</button>
            </Link>
          </div>
        </div>
      );
    }
        export default RegisterPage;