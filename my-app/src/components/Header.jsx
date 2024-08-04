import "../styles/Header.css";
import logo from "../img/icon/logo.png";
import arrow from "../img/icon/arrow.svg";


const Header = () => {


  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-content">
          <div className="logo-content">
            <img src={logo} alt="logo" />
            <h2>+38(063)954-86-95</h2>
          </div>
          <h1>Ендуро прокат у Кривому Розі</h1>
          <button className="header-button">ЗАБРОНЮВАТИ</button>
        </div>
        <div className="header-subtitle">
          <ul>
            <li><a href="#services">ПОСЛУГИ</a></li>
            <li><a href="#gallery">ГАЛЕРЕЯ</a></li>
            <li><a href="#conditions">УМОВИ</a></li>
            <li><a href="#contacts">КОНТАКТИ</a></li>
            <li><a href="#achievements">ПРО НАС</a></li>
            <li className="menu">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </li>
          </ul>
          <div className="subtitle">
            Мрієте про власний ендуро мотоцикл чи прагнете незабутнього
            відпочинку? <br /> Приходьте до нас!
            <br /> Наші досвідчені інструктори зроблять все можливе, щоб ви
            відчули драйв та впевненість на бездоріжжі, зарядилися позитивними
            емоціями та отримали море вражень!
          </div>
          <div className="subword">
            <div className="line" />
            EXTREME
            <div className="line" />
          </div>
        </div>
        <div className="header-arrow-down">
          <img src={arrow} alt="arrow to down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
