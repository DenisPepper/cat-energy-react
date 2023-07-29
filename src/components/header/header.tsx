import {HeaderLogo} from "../header-logo/header-logo";
import {HeaderNav} from "../header-nav/header-nav";

export const Header = () => {

    return (
        <header className={'header'}>
            <HeaderLogo />
            <HeaderNav />
        </header>
    );
}
