import styles from './style.module.css';
import classnames from 'classnames';
import logo from '../../../Assets/logo.png';

interface NavbarProps {
    active?: boolean;
    onIconClick?: () => void;
}

const Navbar = ({active, onIconClick}: NavbarProps): JSX.Element => (
    <nav id={styles.navbar}>
        <div className={styles.navWrapper}>
            <p className={styles.brand}>
                <img src={logo} alt="LOGO" height="60"/>
            </p>
            <a className={classnames(styles.menuButton, {[styles.active]: active})} onClick={onIconClick} style={{
                cursor: 'pointer'
            }}>
                <span />
            </a>
        </div>
    </nav>
)

export default Navbar;