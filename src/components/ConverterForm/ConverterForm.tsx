import "./ConverterForm.css";

export default function ConverterForm() {
  return (
    <form>
      <div className="form__row">
        <label htmlFor="Source-Amount">Valor</label>
        <input type="text" id="Source-Amount" name="Source-Amount" />
      </div>
      <div className="form__row">
        <label htmlFor="Base-Currency">De: </label>
        <input type="text" id="Base-Currency" name="Base-Currency" />
      </div>
      <div className="form__row">
        <label htmlFor="Quote-Currency">Para: </label>
        <input type="text" id="Quote-Currency" name="Quote-Currency" />
      </div>
      <button>Converter</button>
    </form>
  );
}
