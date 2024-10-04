import { Link } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <h1>Sistema del Gatito mañoso</h1>
        <div className={styles["header-buttons"]}>
          <Link to={'/register'}>
            <button>Registre-se</button>
          </Link>

          <Link to = {'/login'}> 
          <button>Login </button>
          </Link>
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
