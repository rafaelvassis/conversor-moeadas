import "./ConverterForm.css";

export default function ConverterForm() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("clicou em trocar");
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("clicou em converter");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__row">
        <label htmlFor="Source-Amount">Valor</label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="Source-Amount"
          name="Source-Amount"
        />
      </div>
      <div className="form__row">
        <label htmlFor="Base-Currency">De: </label>
        <select id="Base-Currency">
          <option>USD</option>
          <option>BRL</option>
          <option>EUR</option>
        </select>
      </div>
      <button type="button" onClick={handleClick}>⇅</button>
      <div className="form__row">
        <label htmlFor="Quote-Currency">Para: </label>
        <select id="Quote-Currency">
          <option>USD</option>
          <option>BRL</option>
          <option>EUR</option>
        </select>
      </div>
      <button>Converter</button>
    </form>
  );
}
