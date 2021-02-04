import { Fragment, useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = (): JSX.Element => {
    const [isMenuOpened, setMenuOpened] = useState<boolean | null>(null);

    return (
        <Fragment>
            <Menu active={isMenuOpened} onLinkClick={() => setMenuOpened(null)}/>
            <Navbar active={isMenuOpened} onIconClick={() => setMenuOpened(!isMenuOpened)}/>
        </Fragment>
    )
}

export default MenuHeader;