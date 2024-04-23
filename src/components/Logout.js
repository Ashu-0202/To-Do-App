import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px', // Adjust as needed
            left: '50%',
            transform: 'translateX(-50%)',
        }}>
            {isAuthenticated && (
                <button
                    onClick={() => logout()}
                    style={{
                        padding: '15px 30px',
                        border: 'none',
                        borderRadius: '5px',
                        background: 'linear-gradient(180deg, rgb(134, 123, 205) 0%, rgb(106, 90, 171) 100%)',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Sign Out
                </button>
            )}
        </div>
    );
}

export default LogoutButton;
