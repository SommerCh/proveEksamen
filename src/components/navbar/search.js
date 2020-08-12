import React, {useState, useEffect} from 'react';
import FilterResults from 'react-filter-search';
import {NavLink} from 'react-router-dom';
import './search.css'
// npm i react-filter-search


const SearchPage = (props) => {
    // først laver vi loaderen fordi den er for hurtig og vil forsøge at lave et billede før der er en sti
        const [loader, setLoader] = useState('Loading')
        const [data, setData] = useState('')
        const [searchWord, setSearchWord] = useState('')
        useEffect(() => {
                fetch('https://api.myjson.com/bins/1292fa')
                  .then(response => response.json())
                  .then((data) => {setData(data)
                    // console.log(props.match.params.searchWord)

                    // props har nogle browser værdier. Den her henter en den værdi vi selv har lavet searchWord

                    setSearchWord(props.match.params.searchWord)
                setLoader('done')});
        }, []);

        // den gør at den opdatere siden hver gang der er skrevet et søgeord ind
useEffect(() => {
    setSearchWord(props.match.params.searchWord)

})

        if (loader == 'Loading') {
            return (
                <div>
                    <p>Loading</p>
                </div>
            )
        }
        else {
           return (
            <div className="search">
                
                <FilterResults
                 /* søgeordret */
                    value={searchWord}
                     /* Hvor jeg søger dataen */
                    data={data}
                    /* behandler dataen og udskriver det */
                    renderResults={results => (
                 /* diven her indeholder alt data */
                        <div>
                            {results.map(data => (
                                <div> 
                                    <p>{data.titel}</p> 
                                    <p>Læs mere...</p>                          
                                </div>
                            ))}
                        </div>
                    )}
                />
            </div>
        ) 
        }
        
        
    }
    export default SearchPage;