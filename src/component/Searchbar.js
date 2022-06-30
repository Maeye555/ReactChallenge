import React, {useState} from 'react';

const SearchBar = (props) =>{
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
        //props.onSearchTermChange(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //send the keyword out
        props.onSearchTermChange(term);
        
    }

    return(
        <div className='search-bar ui'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="video-search"> Video Search</label>
                    <input value={term} onChange={handleChange} name='video-search' type="text"/>
                </div>
            </form>
        </div> 
    );
}
export default SearchBar;