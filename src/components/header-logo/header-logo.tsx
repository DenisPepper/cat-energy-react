import {useLocation} from "react-router-dom";

export const HeaderLogo = () => {
    const {pathname} = useLocation();

    return (
        <div className={'logo-wrapper'}>
            <a href="./index.html"
               aria-current={pathname === '/' ? 'page' : 'false'}>
                <img
                    src="./img/logo-mobile.svg"
                    width="33"
                    height="38"
                    alt="Логотип интернет-магазина еды для кошек."
                />
            </a>
            <img
                src="./img/logo-shop-name-mobile.svg"
                width="101"
                height="18"
                alt="Cat energy - интернет-магазин еды для кошек."
            />
        </div>
    );
}
