import styles from './style.module.css';
import classnames from 'classnames';
import logo from '../../../Assets/logo.png';

interface NavbarProps {
    isOpen?: boolean | null;
    onIconClick?: () => void;
    bgActive?: boolean;
}

const Navbar = ({isOpen, onIconClick, bgActive}: NavbarProps): JSX.Element => (
    <nav id={styles.navbar} className={classnames({
        [styles.bgActive]: bgActive
   })}>
        <div className={styles.navWrapper}>
            <p className={styles.brand}>
                <img src={logo} alt="LOGO" height="60"/>
            </p>
            <div className={classnames(styles.menuButton, {[styles.active]: isOpen})} onClick={onIconClick}>
                <span />
            </div>
        </div>
    </nav>
)

export default Navbar;