import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';
function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    return (
        <div className="searchPage">
            <div className="searchPage___header">
                <Link to="/" >
                    <img className="searchPage___logo" src="https://www.google.com.eg/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />

                </Link>
                <div className="search__headerBody">
                    <Search hideButton />
                    <div className="searchPage__optionleft">

                        <div className="searchPage__option">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to='/shopping'>shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to='/maps'>maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to='/more'>more</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionRight">
                            <div className="searchPage__option">
                                <Link to="/Setting">Setting</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">tools</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {true && (

                <div className="searchpage__results">
                    <p className="searchPage__resultCounter"> About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime}) Secandes for {term}</p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link} >
                                {item.displayLink} 
                                
                            </a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>
                                {item.title} 
                            
                                </h2>
                            </a>
                                <p className="searchPage__resultSnippet">{item.snippet}</p>
 
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
