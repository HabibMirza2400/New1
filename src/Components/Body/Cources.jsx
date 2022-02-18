import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CourcesChild from "./CourcesChild"

const Cources = () => {
    const [courseData, setCourseData] = useState();
    const result = useSelector((state) => state.CourcesReducer.Cources);
    useEffect(() => {
        setCourseData(result);
    }, [result])
    return (

        <div>
            {courseData.map((item) => {
                return (

                    <Card style={{ width: "18rem", display: "inline-block" }}>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Body>
                            <img src={item.img} alt="courcesimg" />
                        </Card.Body>
                        <Card.Footer>{item.desc}</Card.Footer>
                    </Card>
                );
            })};
        </div>
    );
};

export default Cources;