import "../styles/Conditions.css";
import icon from '../img/icon/conditions.svg'

const Conditions = () => {

  return (
    <div className="conditions" id="conditions">
        <div className="block-info">
            <div className="headline">
                <h1>Умови</h1>
                <img src={icon} alt="" />
            </div>
            <ul>
                <li>Уміння їздити на велосипеді</li>
                <li>При собі необхідно мати паспорт або водійське посвідчення</li>
                <li>З 16 років за згодою батьків</li>
                <li>Зарядженний настрiй!</li>
            </ul>
        </div>
    </div>
  );
};

export default Conditions;
