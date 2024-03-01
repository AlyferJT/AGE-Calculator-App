export default function Input({ placeholder, labelText, error, onChange }) {
  const isError = error ? true : false;

  return (
    <div className="main__form__inputs__item">
      <label
        style={isError ? { color: "red" } : null}
        className="main__form__inputs__item-label"
      >
        {labelText}
      </label>
      <input
        style={isError ? { border: "1px solid red" } : null}
        name={labelText}
        placeholder={placeholder}
        className="main__form__inputs__item-input"
        onChange={onChange}
      ></input>
      <p style={{ color: "red" }} className="main__form__inputs__item-error">
        {error === "hide" ? undefined : error}
      </p>
    </div>
  );
}
