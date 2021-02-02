import styles from './style.module.css'
import classnames from 'classnames'

interface MenuProps {
    active?: boolean;
}

const Menu = ({active}: MenuProps) => (
    <div className={classnames(styles.menuContainer, active ? styles.active : styles.deactive)}>
        <div className={styles.overlay}/>
        <div className={styles.menuItems}>
            <ul>
                <li>
                    <a href="#welcome">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="#game">
                        GAME
                    </a>
                </li>
                <li>
                    <a href="#about">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Menu;