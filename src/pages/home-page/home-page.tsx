import {Header} from "../../components/header/header";
import {Footer} from "../../components/footer/footer";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <section className="hero">
                    <div>
                        <h1>Функциональное питание для котов</h1>
                        <p>Занялся собой? Займись котом!</p>
                    </div>
                    <img
                        src="./img/hero-image-mobile.png"
                        alt="Красочная упаковка корма для кошек."
                        width="280"
                        height="270"
                    />
                    <a href="#">Подобрать программу</a>
                </section>
                <section className="nutrition-programs">
                    <ul>
                        <li>
                            <h2>Похудение</h2>
                            <img
                                src="./img/cat-slim-mobile.svg"
                                width="36"
                                height="50"
                                alt="Кошка сидит на задних лапах."
                            />
                            <p>
                                Ваш кот весит больше собаки и почти утратил способность лазить
                                по деревьям? Пора на диету! Cat Energy Slim поможет вашему
                                питомцу сбросить лишний вес.
                            </p>
                            <a href="#">Каталог slim</a>
                        </li>
                        <li>
                            <h2>Набор массы</h2>
                            <img
                                src="./img/cat-strong-mobile.svg"
                                width="67"
                                height="28"
                                alt="Кот в движении."
                            />
                            <p>
                                Заработать авторитет среди дворовых котов и даже собак? Серия
                                Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!
                            </p>
                            <a href="#">Каталог pro</a>
                        </li>
                    </ul>
                </section>
                <section className="nutrition-concept">
                    <h2>Как это работает</h2>
                    <ul>
                        <li>
              <span
                  className="nutrition-concept__point nutrition-concept__point--natural"
                  aria-hidden="true"
              ></span>
                            Функциональное питание содержит только полезные питательные
                            вещества.
                        </li>
                        <li>
              <span
                  className="nutrition-concept__point nutrition-concept__point--powdered"
                  aria-hidden="true"
              ></span>
                            Выпускается в виде порошка, который нужно лишь залить кипятком и
                            готово.
                        </li>
                        <li>
              <span
                  className="nutrition-concept__point nutrition-concept__point--substituted"
                  aria-hidden="true"
              ></span>
                            Замените один-два приема обычной еды на наше функциональное
                            питание.
                        </li>
                        <li>
              <span
                  className="nutrition-concept__point nutrition-concept__point--fast"
                  aria-hidden="true"
              ></span>
                            Уже через месяц наслаждайтесь изменениями к лучшему вашего
                            питомца!
                        </li>
                    </ul>
                </section>
                <section className="nutrition-real-life-case">
                    <h2>Живой пример</h2>
                    <p>
                        Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
                        Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
                        этом он не менял своих привычек и по-прежнему спит по 16 часов в
                        день.
                    </p>
                    <dl>
                        <dt>снижение веса</dt>
                        <dd>5 кг</dd>
                        <dt>затрачено времени</dt>
                        <dd>60 дней</dd>
                        <dt>Затраты на питание:</dt>
                        <dd>15 000 РУБ.</dd>
                    </dl>
                    <div>
                        <img
                            src="./img/compare-slider-TEMP.png"
                            alt="Результат диеты - было/стало."
                        />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
