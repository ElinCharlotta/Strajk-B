import './Input.scss';

function Input({
  label,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
}) {
  return (
    <section className='input'>
      <label htmlFor='shoe' className='input__label'>{label}</label>
      <input
        id='shoe'
        type={type}
        className={`input__field ${customClass ? customClass : ''}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue : ''}
        disabled={disabled}
        data-testid={`input-${label}`}
      />
    </section>
  );
}

export default Input;
