import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = "254792651241";
    const message = "Hello! I'm interested in your WhatsApp automation services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                backgroundColor: 'var(--color-green, #25D366)',
                color: 'white',
                borderRadius: 'var(--radius-full, 9999px)',
                boxShadow: 'var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))',
                transition: 'all var(--transition-normal, 300ms)',
                cursor: 'pointer'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = 'var(--color-teal, #128C7E)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'var(--color-green, #25D366)';
            }}
            aria-label="Chat with us on WhatsApp"
        >
            <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.087-.114-.694-.924-.694-1.762 0-.837.44-1.246.596-1.412.156-.165.34-.207.454-.207.114 0 .228.001.327.005.105.004.246-.039.384.298.144.351.491 1.197.533 1.282.043.085.071.184.014.298-.057.114-.085.184-.17.284-.085.099-.18.223-.257.299-.085.085-.175.176-.075.347.1.171.442.73.95 1.182.654.582 1.205.764 1.376.849.171.085.271.071.371-.043.1-.114.426-.497.54-.667.114-.171.228-.142.384-.085.156.057.994.469 1.165.554.171.085.284.128.327.2.043.071.043.409-.101.815zM12 2C6.477 2 2 6.477 2 12c0 1.833.498 3.55 1.365 5.02L2 22l5.076-1.334C8.508 21.516 10.19 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.63 0-3.156-.444-4.466-1.214l-.321-.189-2.994.786.804-2.937-.208-.33C4.053 14.805 3.5 13.467 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
