const FormRow = ({ type, name, labelText, defaultValue }) => {
    return (
      <>
        <label htmlFor={name} className="label">{labelText || name}</label>
        <input
          type={type}
          name={name}
          id={name}
          className="input-field"
          placeholder={labelText || name}
          defaultValue={defaultValue || ''}
          required
        />
      </>
    );
  };
  
  export default FormRow;
  