import React, { useState } from 'react';

function Register({onSubmit}) {
    const  [name, setName] = useState('');
    const  [password, setPassword] = useState('');
    const  [email, setEmail] = useState('');
    const  [telephone, setTelephone] = useState ('');


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, password, email, telephone});

        setName('');
        setEmail('');
        setPassword('');
        setPassword('');
        setTelephone('');
      };

     return (
        <div className='container'>
            <h3 className='  title'> Preencha os campos abaixo</h3>
            <form onSubmit={handleSubmit}>
            <label >
                Nome:
                <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                senha
                <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                email
                <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Telefone
                <input
                type='text'
                value={telephone}
                onChange={(e) => setTelephone  (e.target.value)}
                />
            </label>
            <button type='submit'>Enviar</button>
            </form>
        </div>
     );
}
    export default Register;
