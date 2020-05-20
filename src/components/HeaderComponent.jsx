import React from 'react';
import './headerstyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { screenActions } from '../features/screenReducer';
import bigLogo from '../assets/LogoBig.png';
import smallLogoRed from '../assets/LogoSmallRed.png'
import arrowBack from '../assets/back-red.png';


const HeaderComponent = () => {

    const dispatch = useDispatch();
    const screen = useSelector(state => state.screen);
    const category = useSelector(state => state.category);

    let logoClass = 'medium';

    let content = (<> 
    {/* ska visas i desktop */}
        <a className='go-back-text desktop-size' href='#' onClick={()=> dispatch(screenActions.homeScreen())}>Go back</a>
    {/* ska visas i mobilvy */}
        <img onClick={()=>dispatch(screenActions.homeScreen())} className="go-back mobile-size" src={arrowBack} alt="Go to previous page"/>
    {/* ska visas i desktopvy */}
        <img className={logoClass +' desktop-size'} src={bigLogo} alt="Go to homescreen" onClick={()=> dispatch(screenActions.homeScreen())}/>
    {/* ska visas i mobilvy */}
        <img className='logo-mobile mobile-size' src={smallLogoRed} alt="Go to homescreen" onClick={()=> dispatch(screenActions.homeScreen())}/>

        </>
    )

    if(screen === 'welcomeScreen'){
        logoClass = 'big';
        content = 
        <img className={logoClass} src={bigLogo} alt="Logo" onClick={()=> dispatch(screenActions.homeScreen())}/>;

    }


    return(
        <header>
            {content}
        </header>
    )
}

export default HeaderComponent;