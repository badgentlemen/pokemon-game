import styles from './style.module.css'
import classnames from 'classnames'
import { ReactNode } from 'react';

interface MenuProps {
    active?: boolean | null;
}
interface MenuItem {
    link?: string;
    title?: ReactNode;
}

const menu: MenuItem[] = [{
    link: '/',
    title: 'HOME'
}, {
    link: '/game',
    title: 'GAME'
}, {
    link: '/about',
    title: 'ABOUT'
}, {
    link: '/contact',
    title: 'CONTACT'
}]

const Menu = ({ active }: MenuProps) => (
    <div className={classnames(styles.menuContainer, { [styles.active]: active === true, [styles.deactive]: active === false })}>
        <div className={styles.overlay} />
        <div className={styles.menuItems}>
            <ul>
                {menu.map(({ link, title }, index) => (
                    <li key={index}>
                        <a href={link}>
                            { title }
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default Menu;