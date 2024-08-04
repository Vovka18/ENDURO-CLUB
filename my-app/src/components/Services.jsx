import "../styles/Serviсes.css";
import iconServices from '../img/icon/iconServices.svg'


const Servises = () => {
  return (
    <main className="services" id="services">
        <div className="info-panel">
            <div className="headline">
                <h1>Послуги</h1> 
                <img src={iconServices} alt="" />
            </div>
            <ul>
                <li><span className="price">2500грн/</span>людина</li>
                <li>На вибiр 3 мотоцикла</li>
                <li>Вiд 2 до 6 годин за кермом</li>
                <li>Группа вiд 4 людин</li>
                <li>Виїзд кожних вихідних з 12:00</li>
            </ul>
            <div className="tour-list">
                <div className="headline-tour-list">
                    <h2>До туру входить</h2>
                    <div className="line"></div>
                </div>
                <ul>
                    <li>Вода</li>
                    <li>Інструктаж</li>
                    <li>Тест-драйв</li>
                    <li>Екіпірування</li>
                    <li>Бензин</li>
                </ul>

            </div>
        </div>
    </main>
  );
};

export default Servises;
