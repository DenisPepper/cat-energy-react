import {HeaderNavItem} from "../header-nav-item/header-nav-item";

const paths = [
    {path: './index.html', text: 'Главная', route: '/'},
    {path: './catalog.html', text: 'Каталог продукции', route: '/catalog'},
    {path: './form.html', text: 'Подбор программы', route: '/form'}
];

export const HeaderNav = () => {

    return (
        <nav className={'navbar'}>
            <ul className={'navbar__list'}>
                {paths.map(
                    (link) => <HeaderNavItem key={link.path} route={link.route} path={link.path} text={link.text}/>
                )}
            </ul>
        </nav>
    );
}
