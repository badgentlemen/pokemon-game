import React from 'react';
import style from './style.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg }) => {

    let layoutStyle = { };

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
                    {descr && (
                        <div className={`${style.desc} ${style.full}`}>
                            <p>{descr}</p>
                        </div>
                    )}
                </article>
            </div>
        </section>
    )
}

export default Layout;