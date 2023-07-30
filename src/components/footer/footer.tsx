export const Footer = () => {
    return (
        <footer className='footer'>
            <img
                src="./img/logo-shop-name-mobile.svg"
                width="101"
                height="18"
                alt="Cat energy - интернет-магазин еды для кошек."
            />
            <section className="map">
                <h2>Местоположение на карте</h2>
                <div>
                    <h3>приглашаемк сотрудничеству дилеров!</h3>
                    <p>ул. Большая Конюшенная, д. 19/8 Санкт-Петербург</p>
                </div>
                <img
                    src="./img/map-mobile.png"
                    width="320"
                    height="362"
                    alt="Маркер на карте указывает местоположение магазина."
                />
                <img src="./img/map-marker.png" alt="Маркер." aria-hidden="true"/>
            </section>
            <section className="social">
                <h2>Контакты в социальных сетях</h2>
                <ul>
                    <li>
                        <a href="#">Вконтакте</a>
                    </li>
                    <li>
                        <a href="#">Ютуб</a>
                    </li>
                    <li>
                        <a href="#">Телеграм</a>
                    </li>
                </ul>
            </section>
            <section className="developer">
                <h2>Разрабочик сайта</h2>
                <p>HTML Academy</p>
                <img
                    src="./img/htmlacademy.svg"
                    width="27"
                    height="34"
                    alt="HTML Academy - разработчик сайта."
                />
            </section>
        </footer>
    );
}
