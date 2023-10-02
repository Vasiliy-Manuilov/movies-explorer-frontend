import "./FormField.css";

export function FormField({
    value = "",
    name,
    errorMessage,
    onChange,
    label,
    type,
    required = true,
    minLength,
    maxLength
}) {

    return <div className="form-field">
        <label className='form-field__label'>
            { label }
            <input
                name={name}
                type={type}
                className='form-field__input'
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                value={value}
                onChange={onChange}
            />
            <div className='form-field__error'>{ errorMessage }</div>
        </label>
    </div>
}
