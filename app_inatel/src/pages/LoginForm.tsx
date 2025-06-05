import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
    email: string;
    password: string;
    isLoggedIn: boolean;
}

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Verifica se há dados de login no localStorage ao carregar o componente
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const parsedData: UserData = JSON.parse(userData);
            if (parsedData.isLoggedIn) {
                navigate('/menu'); // Redireciona se já estiver logado
            }
        }
    }, [navigate]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Simulação de chamada API
        setTimeout(() => {
            if (email === 'admin@example.com' && password === 'admin123') {
                const userData: UserData = {
                    email,
                    password,
                    isLoggedIn: true
                };
                localStorage.setItem('userData', JSON.stringify(userData));
                 navigate('/menu'); // Redireciona para o menu após login
                setIsLoggedIn(true);
            } else {
                setError('Credenciais inválidas');
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen hero bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="w-full hero-content">
                <div className="w-full max-w-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Login</h1>
                    </div>

                    <div className="w-full shadow-xl card bg-base-100">
                        <div className="p-8 card-body">
                            {error && (
                                <div className="alert alert-error">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg label-text">E-mail</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="input input-bordered input-lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg label-text">Senha</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        className="input input-bordered input-lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mt-8 form-control">
                                    <button
                                        type="submit"
                                        className={`btn btn-primary btn-lg `}
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
