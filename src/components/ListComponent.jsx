import React from 'react';
import './listcomponent.css';
import smallRedLogo from '../assets/LogoSmallRed.png';
import largeLogo from '../assets/LogoBig.png';
import ListCard from './ListCard';
import { useDispatch,useSelector } from 'react-redux';
import {screenActions} from '../features/screenReducer';
import {categoryActions} from '../features/categoryReducer';
import {listActions} from '../features/listReducer';

const ListComponent = ({formScreen,startCard}) =>{
    const dispatch = useDispatch();

    const category = useSelector(state => state.category);
    const testLista = useSelector(state => state.list);

    let h2 = '', titleText = '', creatorText = '', usedBeforeText = '';
    let colorClass = '';

    switch(category){
        case 'music':
            h2 = 'Add Music';
            // titleText = 'Song Title';
            // creatorText = 'Artist';
            // usedBeforeText = 'Listened to'
            // colorClass = 'background-red text-red'
        break;
        case 'books':
            h2 = 'Add Book';
            // titleText = 'Book Title';
            // creatorText = 'Author';
            // usedBeforeText = 'Read before';
            // colorClass = 'background-yellow text-yellow';
        break;
        case 'movies':
            h2 = 'Add Movie';
            // titleText = 'Movie Title';
            // creatorText = 'Director';
            // usedBeforeText = 'Seen';
            // colorClass = 'background-green text-green';
        break;
    }

    const jsxLista=testLista.map((item, index)=><ListCard key={item.title+index} title={item.title} creator={item.creator} usedBefore={item.usedBefore} rating={item.rating} comment={item.comment} />)
     const handleFormScreen = (e) => {
        dispatch(screenActions.formScreen(e));
    }
 
    return(
        <div className="desktop-mobil">
        <div className="menu-desktop">
            <div className='desktop-menu'>
                <div className="sort">
                        <div className="drop-div">Sort</div>
                        <div className="dropdown-content">
                            <div>Song title</div>
                            <div>Artist</div>
                            <div>Rating</div>
                            <div>Listen</div>
                        </div>
                  
                </div> 
                <div className="listcomponent-input">
                    <input type="text" placeholder="Search" />
                </div>
                <div >
                    
                    <img className='listcomponent-largelogo' src={largeLogo} onClick ={startCard}  alt=" large logo" />
                </div>
                
            </div>
        </div>
        <div className="listcomponent-body">
            <div className="listcomponent-logo">
                <img className='listcomponent-logo' src={smallRedLogo}  onClick ={startCard} alt=" small red logo" />
            </div>
            <h1>
                Music
            </h1>
            <div className='listcomponent-menu'>
                <div className="sort">
                        <h2 className="drop-div">Sort</h2>
                        <div className="dropdown-content">
                            <div>Song title</div>
                            <div>Artist</div>
                            <div>Rating</div>
                            <div>Listen</div>
                        </div>
                    
                </div> 
                <div className="listcomponent-input">
                   <input type="text" placeholder="Search" />
                </div>
                
            </div>
            <div className=" main scrollable">

                    {jsxLista}
            

            </div>
            <div className='add-button'>
               <button onClick={handleFormScreen}>Add music</button>
            </div>
        </div>
        </div>
    );
}
export default ListComponent;

