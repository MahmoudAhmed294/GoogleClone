import React, { useState } from 'react'
import './search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import {actionType} from '../reducer'
function Search({ hideButton }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setinput] = useState('');
    const history = useHistory();
    const Search = e => {
        e.preventDefault();
        console.log(input);
        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term:input
        })



        history.push("./search")
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setinput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButton ? (
                <div className="search_button">
                    <Button variant="outlined" type='submit' onClick={Search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>

                </div>
            ) : (

                    <div className="search_button">
                        <Button className="search_buttonHidden" variant="outlined" type='submit' onClick={Search}>Google Search</Button>
                        <Button className="search_buttonHidden" variant="outlined">I'm Feeling Lucky</Button>

                    </div>

                )}
        </form>
    )
}

export default Search
