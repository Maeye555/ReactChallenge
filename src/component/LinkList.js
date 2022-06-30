import React from 'react';
import {Link} from 'react-router-dom';


const LinkList = (videos) => {
        const pages = Math.ceil(videos.videos.length/10);
        console.log(pages);
        return (<div>
        {[...Array(pages)].map((e,i) =>{
             return(
                <li><Link to={`/page/${i+1}`}>Page {i+1}</Link></li>
             );   
        })}
        </div>);
};
export default LinkList;