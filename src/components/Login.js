import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Centers vertically
        }}>
            {!isAuthenticated && (
                <button
                    onClick={() => loginWithRedirect()}
                    style={{
                        padding: '15px 30px', // Increase button size
                        border: 'none',
                        borderRadius: '5px',
                        background: 'linear-gradient(180deg, rgb(134, 123, 205) 0%, rgb(106, 90, 171) 100%)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Box highlighting effect
                        color: 'white',
                        fontSize: '1.2rem', // Increase font size
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Sign In
                </button>
            )}
        </div>
    );
}

export default LoginButton;
