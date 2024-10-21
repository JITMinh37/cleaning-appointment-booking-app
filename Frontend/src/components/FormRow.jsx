const FormRow = ({ type, name, labelText, placeholder, value, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
