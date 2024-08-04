import "../styles/Contacts.css";
import kovi from "../img/kovi.png";
import kayo from "../img/kayo.png";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [choisMoto, setChoisMoto] = useState("");
  const [inputs, setInputs] = useState({ name: "", phone: "", text: "" });

  const choisMotoFun = (moto) => {
    setChoisMoto(moto);
  };

  const sendForm = () => {
    // fetch(`https://api.telegram.org/bot7285263809:AAE_A1ppuJuXb4A0aqyTV6mtORcSRBq0Xjw/sendMessage?chat_id=933429659&text=Имя: ${inputs.name}%0AТелефон: ${inputs.phone}`);
    fetch(
      `https://api.telegram.org/bot7285263809:AAE_A1ppuJuXb4A0aqyTV6mtORcSRBq0Xjw/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 933429659,
          text: `Имя: ${inputs.name}\nОпыт: ${inputs.text}\nТелефон: [${inputs.phone}](tel:${inputs.phone})`,
          parse_mode: "MarkdownV2",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
    alert("Отправлено");
  };

  return (
    <div className="contacts" id="contacts">
      <div className="headline">
        <h1>Залиште заявку і ми вам передзвонимо</h1>
      </div>
      <div className="chois-moto">
        <div className="text">Бажанний мотоцикл</div>
        <div className="moto-menu">
          <div
            className="moto"
            onClick={() => {
              choisMotoFun("KOVI LITE");
            }}
          >
            <img src={kovi} alt="moto" />
            <div className="headline-moto">KOVI LITE</div>
          </div>
          <div
            className="moto"
            onClick={() => {
              choisMotoFun("KAYO K2");
            }}
          >
            <img src={kayo} alt="moto" />
            <div className="headline-moto">KAYO K2</div>
          </div>
          <div
            className="moto"
            onClick={() => {
              choisMotoFun("KAYO K2");
            }}
          >
            <img src={kayo} alt="moto" />
            <div className="headline-moto">KAYO K2</div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <input
          type="text"
          className="input-name"
          placeholder="Ваше iм`я"
          onChange={(e) =>
            setInputs({
              name: e.target.value,
              phone: inputs.phone,
              text: inputs.text,
            })
          }
        />
        <input
          type="text"
          className="input-phone"
          placeholder="Ваш телефон"
          onChange={(e) =>
            setInputs({
              name: inputs.name,
              phone: e.target.value,
              text: inputs.text,
            })
          }
        />
        <textarea
          type="text"
          className="input-text"
          placeholder="Опишіть Ваш досвід та навички водіння мотоцикла"
          onChange={(e) =>
            setInputs({
              name: inputs.name,
              phone: inputs.phone,
              text: e.target.value,
            })
          }
        />
        <button className="send-form" onClick={sendForm}>
          ВІДПРАВИТИ
        </button>
      </div>
      <div className="subtext">
        Якщо у вас залишилися питання, телефонуйте за цим номером -{" "}
        <span className="bold-phone">+38(063)954-86-95</span>
      </div>
    </div>
  );
};

export default Contacts;
