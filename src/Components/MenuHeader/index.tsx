import { Fragment, useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

const MenuHeader = () => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    return (
        <Fragment>
            <Menu active={menuOpened}/>
            <Navbar active={menuOpened} onIconClick={() => setMenuOpened(!menuOpened)}/>
        </Fragment>
    )
}

export default MenuHeader;