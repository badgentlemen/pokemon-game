import {CSSProperties, FunctionComponent, ReactNode} from 'react';
import style from './style.module.css';
import classnames from 'classnames';
interface LayoutProps {
    id: string;
    title?: ReactNode;
    urlBg?: string;
    colorBg?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({id, title, urlBg, colorBg, children}) => {

    let layoutStyle: CSSProperties = {};

    if (urlBg) {
        layoutStyle.backgroundImage = `url(${urlBg})`;
   }

    if (colorBg) {
        layoutStyle.backgroundColor = colorBg;
   }

    return (
        <section className={style.root} id={id} style={layoutStyle}>
            <div className={style.wrapper}>
                <article>
                    {title && (
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                    )}
                    {children && (
                        <div className={classnames(style.desc, style.full)}>
                            {children}
                        </div>
                    )}
                </article>
            </div>
        </section>
    )
}

export default Layout;