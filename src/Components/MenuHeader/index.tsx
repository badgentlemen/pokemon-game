import {Fragment, FunctionComponent, useState} from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
interface MenuHeaderProps {
    bgActive?: boolean;
}

const MenuHeader: FunctionComponent<MenuHeaderProps> = ({bgActive}): JSX.Element => {
    const [isMenuOpened, setMenuOpened] = useState<boolean | null>(null);

    return (
        <Fragment>
            <Menu active={isMenuOpened} onLinkClick={() => setMenuOpened(null)}/>
            <Navbar isOpen={isMenuOpened} onIconClick={() => setMenuOpened(!isMenuOpened)} bgActive={bgActive}/>
        </Fragment>
    )
}

MenuHeader.defaultProps = {
    bgActive: false
};

export default MenuHeader;