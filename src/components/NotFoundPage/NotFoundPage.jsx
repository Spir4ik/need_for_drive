import React, {useEffect} from 'react'
import styleNotFoundPage from './NotFoundPage.module.scss'
import Spinner from "../Spinner/Spinner.jsx";
import HamburgerMenu from "../HamburgerMenu.jsx";

export default function () {
    const initialPage = window.location;
    useEffect(() => {
        if (localStorage.getItem('id') && initialPage.hash === `#/${localStorage.getItem('id')}`) {
            window.location.reload();
        }
    }, []);

    return(
        <div className="wrapper other-page">
            <HamburgerMenu />
            <div className={styleNotFoundPage.error__block}>
                {localStorage.getItem('id') && initialPage.hash === `#/${localStorage.getItem('id')}` ? <Spinner /> :
                <>
                    <div className={styleNotFoundPage.block__header}>
                        404
                    </div>
                    <div className={styleNotFoundPage.block__info}>
                        <p>Что-то пошло не так!</p>
                    </div>
                    <div className={styleNotFoundPage.block__footer}>
                        <p>Вы попали на несуществующую страницу.</p>
                        <button>На главную</button>
                    </div>
                </>}
            </div>
        </div>
    )
}