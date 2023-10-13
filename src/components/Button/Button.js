import './Button.css'

export function Button({ disabled, children, type, onClick }) {
    return <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`button ${disabled ? 'button_disabled' : ''}`}
    >
        { children }
    </button>
}
