import React, { useState } from 'react';
import initialState from '../FakeData';
import SingleBlog from './SingleBlog';

const BlogLists = ({searchItem}) => {

    const [data, setdata] = useState(initialState);
    
    const categoryHandler = (c) => {
        const filterCategory = data.filter((v)=>{
            return v.category === c
        })
        setdata(filterCategory)
    }
    const authorHandler = (c) => {
        const filterAuthor = data.filter((v)=>{
            return v.authorName === c
        })
        setdata(filterAuthor)
    }
    return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

        {
            data.filter((blogItem) => {
                return blogItem.blogTitle.toLowerCase().includes(searchItem.toLowerCase())
            })
            .map((a) => <SingleBlog blog ={a} key={a.id} categoryHandler = {categoryHandler} authorHandler ={authorHandler} /> )
        }
    

    </div>
    );
};

export default BlogLists;