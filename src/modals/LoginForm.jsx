import { useAuth } from '../hooks/useAuth';
import { useLogin } from '../hooks/Login';
import { useState } from 'react';
import styles from '../css/Login.module.css';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { LoginUser, loading, error } = useLogin();  
    const { token } = useAuth();
    const navigate = useNavigate();

    const handleReturnHome = () => {
        navigate('/');
    };

    const submit = async (event) => {
        event.preventDefault();
        try {
            const loginSuccess = await LoginUser({ username, password });  // Corrigido para LoginUser
            if (loginSuccess) {
                navigate('/');
            }
        } catch (err) {
            console.error('Erro ao fazer login:', err);
        }
    };

    return (
        <div className={styles['login-form']}>
            <h2>Login</h2>
            {token ? (
                <p>You are already logged in {username}</p>
            ) : (
                <form onSubmit={submit} className={styles['input-container']}>
                    <div>
                        <label style={{ color: '#ffffff' }}>Name</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className={styles['input']}
                        />
                    </div>
                    <div>
                        <label style={{ color: '#ffffff' }}>Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className={styles['input']}
                        />
                    </div>
                    {error && <p className={styles['error']}>{error}</p>}  {/* Corrigi o acesso ao erro */}
                    <button
                        type="submit"
                        className={`${styles['btn-primary']} ${loading ? styles['disabled'] : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                    <button type="button" onClick={handleReturnHome} className={styles['btn-secondary']}>
                        Voltar para Home
                    </button>
                </form>
            )}
        </div>
    );
}
