import { Link, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [isCreator, setCreator] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticate(false);
    setCreator(false); 
    navigate('/'); 
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const role = payload.role;
            if (role === 'CREATOR') {
                setCreator(true);
            }
            setIsAuthenticate(true);
        } catch (error) {
            console.error('Invalid token format', error);
            localStorage.removeItem('token');
        }
    }
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1>Sistema del Gatito mañoso</h1>
        <div className={styles["header-buttons"]}>
          {isAuthenticate ? (
            <>
              {isCreator && (
                <Link to={'/create'}>
                  <button>Adicionar tarefas</button>
                </Link>
              )}
              <button onClick={handleLogout}>Sair</button>
            </>
          ) : (
            <>
              <Link to={'/register'}>
                <button>Registre-se</button>
              </Link>

              <Link to={'/login'}>
                <button>Login</button>
              </Link>
            </>
          )}
        </div>
      </header>

      <p>Obrigado por usar nosso sistema</p>

      <footer>
        <p>Desenvolvido por Hallyson</p>
        <p>Tel: 18996636287</p>
      </footer>
    </div>
  );
}

export default App;
