import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CourcesChild = () => {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const dispatch = useDispatch();
    const data = {
        title: title,
        desc: description,
        img: image

    }
    const handleDispatch = () => {
        dispatch({ type: "ADD_COURCES", data })
    }
    return (
        <div>
            <h1>Dispatch</h1>
            <input
                type="text"
                id='html'
                className='mt-2'
                onChange={(e) => setTitle(e.target.value)} />
            <input
                type="text"
                id='css'
                className='mt-2'
                onChange={(e) => setImage(e.target.value)} />
            <input
                type="text"
                id='javascript'
                className='mt-2'
                onChange={(e) => setDescription(e.target.value)} />
            <button onClick={handleDispatch} className='mt-2'>Add Cources</button>
        </div>
    );
};

export default CourcesChild;
