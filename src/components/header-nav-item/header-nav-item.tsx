import {useLocation} from "react-router-dom";

interface HeaderNavItemProps {
    route: string
    path: string;
    text: string;
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
    const {path, text, route} = props;
    const {pathname} = useLocation();
    const isCurrent = pathname === route;
    return (
        <li className={'navbar__item'}>
            <a
                className={isCurrent ? 'link link--active' : 'link'}
                href={path}
                aria-current= {isCurrent ? 'page' : 'false'}
            >
                {text}
            </a>
        </li>
    );
}
