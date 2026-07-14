import "./Header.css";
import logo from "../../assets/img/logo_conversor_moedas.png";

export default function Header() {
  return (
    <header>
      <div className="header__title">
        <img src={logo} alt="Logo da aplicação" />
        <h1>Conversor de Moedas </h1>
      </div>
      <h2 className="header__subtitle"> Cotações em tempo real </h2>
    </header>
  );
}
