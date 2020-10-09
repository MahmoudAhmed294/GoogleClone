import { useState, useEffect } from 'react';
import API_KEY from './key'
const CONTEXT_KEY = "6df92726057e2e47f"
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchdata = async() => {

            fetch(
                `
                https://www.googleapis.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&q=${term}`
            ).then(res => res.json()).then(result => {
                setData(result)
            })
        }
        fetchdata();
    }, [term])
    return { data }
}

export default useGoogleSearch
