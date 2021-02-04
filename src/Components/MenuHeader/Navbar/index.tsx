import styles from './style.module.css';
import classnames from 'classnames';
import logo from '../../../Assets/logo.png';

interface NavbarProps {
    active?: boolean | null;
    onIconClick?: () => void;
}

const Navbar = ({active, onIconClick}: NavbarProps): JSX.Element => (
    <nav id={styles.navbar}>
        <div className={styles.navWrapper}>
            <p className={styles.brand}>
                <img src={logo} alt="LOGO" height="60"/>
            </p>
            <div className={classnames(styles.menuButton, {[styles.active]: active === true})} onClick={onIconClick}>
                <span />
            </div>
        </div>
    </nav>
)

export default Navbar;