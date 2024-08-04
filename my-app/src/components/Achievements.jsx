import "../styles/Achievements.css";
import achievements1 from '../img/icon/achievements1.svg'
import achievements2 from '../img/icon/achievements2.svg'
import achievements3 from '../img/icon/achievements3.svg'
import achievements4 from '../img/icon/achievements4.svg'
import React, { useEffect, useState } from "react";


const Header = () => {

  return (
    <main className="achievements" id="achievements">
      <section className="petard">
        <img src={achievements1} alt="" />
        <div className="block-text">
            <p>ПРОТЯГОМ</p>
            <h1>1</h1>
            <p>РОКУ МИ ДАРУЄМО ЯСКРАВІ ЕМОЦІЇ</p>
        </div>
      </section>
      <section className="moto">
        <img src={achievements2} alt="" />
        <div className="block-text">
            <h1>100+</h1>
            <p>ПРОВЕДЕНИХ ТУРІВ</p>
        </div>
      </section>
      <section className="extrim">
        <img src={achievements3} alt="" />
        <div className="block-text">
            <h1>20+</h1>
            <p>ВІД ЛЕГКИХ ДО ЕКСТРЕМАЛЬНИХ МАРШРУТІВ</p>
        </div>
      </section>
      <section className="joy">
        <img src={achievements4} alt="" />
        <div className="block-text">
            <h1>110%</h1>
            <p>ЗАДОВОЛОЕННИХ КЛІЄНТІВ</p>
        </div>
      </section>
    </main>
  );
};

export default Header;
