import { ReactNode } from 'react';
import style from './style.module.css';

interface HeaderProps {
    title?: ReactNode;
    descr?: ReactNode;
    onButtonClick?: () => void;
}

const Header = ({title, descr, onButtonClick}: HeaderProps) => {
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                { title && <h1>{title}</h1> }
                { descr && <p>{descr}</p> }
                <button onClick={onButtonClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;