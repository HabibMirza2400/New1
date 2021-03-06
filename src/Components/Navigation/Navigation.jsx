import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import NavigationChild from "./NavigationChild";
import MyCarouselChild from "../Body/MyCarouselChild";
import CourcesChild from "../Body/Cources";
import OurMentorsChild from "../Body/OurMentorsChild";
import "./Navigation.css";

const Navigation = () => {
  const [navData, setNavData] = useState([]);
  const [show, setShow] = useState(false);
  const finalResult = useSelector((state) => state.navReducer.navData);
  useEffect(() => {
    setNavData(finalResult);
  }, [finalResult]);
  return (
    <div>
      <nav>
        {navData.map((elemnets) => {
          return (
            <a
              href={elemnets.link}
              target={elemnets.target}
              className="myAnchor">
              {elemnets.name}
            </a>
          );
        })}
      </nav>
      <Button onClick={() => setShow(true)} style={{ marginTop: "5px" }}>Dashboard</Button>
      {/* model from react bootstrap site */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add Navigations</h4>
          <NavigationChild />
          <h4>Add Crousel</h4>
          <MyCarouselChild />
          <h4>Add Courses</h4>
          <CourcesChild />
          <h4>Add Mentors</h4>
          <OurMentorsChild />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Navigation;