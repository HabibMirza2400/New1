import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';


const NavigationChild = () => {
    const [name, setName] = useState();
    const [link, setLink] = useState();
    const [target, setTarget] = useState();
    const dispatch = useDispatch();
    const handleAddLink = () => {
        if (!name && !link && !target) {
            alert("Please Fill Required Value");
        }
        else if (!name) {
            alert("Please Fill Name")
        } else if (!link) {
            alert("Please Fill Link")
        } else if (!target) {
            alert("Please Fill Target")
        } else {
            dispatch({ type: "ADD_NAV_LINK", navData: { name, link, target } });
            // OR
            // dispatch(NavigationAction(name, link, target));
        }

    };
    return (
        <div style={{ float: "right", margin: "15px" }}>
            <input
                className="m-2"
                type="text"
                placeholder="Add New Link Name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                className="m-2"
                type="text"
                placeholder="Add New Link URL"
                onChange={(e) => setLink(e.target.value)}
            />
            <input
                className="m-2"
                type="text"
                placeholder="Add New Link Target"
                onChange={(e) => setTarget(e.target.value)}
            />
            <button onClick={handleAddLink} >Add Link</button>
            {/* disabled={!name&&!link&&!target} */}
        </div>
    );
};

export default NavigationChild;