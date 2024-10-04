import { useState } from "react";
import { login } from "./AuthService";

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const LoginUser = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const data = await login(credentials);
            const token = data?.token;

            if (token) {
                localStorage.setItem('token', token);
                return true;
            } else {
                throw new Error("Token not provided"); 
            }
        } catch (err) {
            setError(err?.response?.data?.message || err.message); 
        } finally {
            setLoading(false);
        }

        return false; 
    };

    return { LoginUser, loading, error };
}
