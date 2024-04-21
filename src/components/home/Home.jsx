import React from "react";
import Slider from "../detail/Slider";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.news_container}>
        <Slider />
      </div>
      <div className={styles.info_container}>
        <h2>Почему стоит покупать сервера именно у нас?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>23 года опыта</h3>
            <p>
              Работаем на рынке VDS хостинга с 2001 года, непрерывно растём и
              развиваемся
            </p>
          </div>
          <Link
            style={{ textDecoration: "none", color: "#608ebe" }}
            to={"/help"}
          >
            <div className={styles.card}>
              <h3>Круглосуточная поддержка</h3>
              <p>
                Мы предоставляем круглосуточную техническую поддержку для наших
                клиентов
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <h3>Удобство</h3>
          <p>
            У нас вы можете
            <Link
              style={{ textDecoration: "none", color: "#608ebe" }}
              to={"/myserver"}
            >
              наблюдать
            </Link>
            за своими серверами,
            <Link
              style={{ textDecoration: "none", color: "#608ebe" }}
              to={"/order"}
            >
              покупать
            </Link>
            новые серверы в удобном формате и самостоятельно
            <Link
              style={{ textDecoration: "none", color: "#608ebe" }}
              to={"/config"}
            >
              конфигурировать
            </Link>
            их по своему желанию
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;