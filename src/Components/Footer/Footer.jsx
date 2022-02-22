import React from 'react';
import "./footer.css";
import { useSelector } from 'react-redux';

const Footer = () => {
    const footerDataOne = useSelector((state) => state.foooterReducer.arrOne);
    const footerDataTwo = useSelector((state) => state.foooterReducer.arrTwo);
    const footerDataThree = useSelector((state) => state.foooterReducer.arrThree);

    return (
        <div className='mainDiv'>
            <div>
                <img src="https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?b=1&k=20&m=1226241649&s=170667a&w=0&h=lXhD5bdn_YT50-ItctUnqB2WiGZ8Jye1GZHjvDsb2Xo="
                    alt="footerImage"
                    width={"100%"}
                    height="250px"
                />
            </div>
            <div style={{
                position: "absolute",
                float: "right",
                backgroundColor: "gray",
            }}>
                <div style={{ display: "inline-block", marginRight: "100px" }}
                    className="ml-2">
                    {footerDataOne.map((item) => {
                        return (
                            <>
                                <a href={item.link} target={item.target}>
                                    {item.title}
                                </a> <br />
                            </>
                        );
                    })}
                </div>
                <div style={{ display: "inline-block", marginRight: "100px" }}
                    className="ml-2">
                    {footerDataTwo.map((item) => {
                        return (
                            <>
                                <a href={item.link} target={item.target}>
                                    {item.title}
                                </a> <br />
                            </>
                        );
                    })}
                </div>
                <div style={{ display: "inline-block", marginRight: "100px" }}
                    className="ml-2">
                    {footerDataThree.map((item) => {
                        return (
                            <>
                                <a href={item.link} target={item.target}>
                                    {item.title}
                                </a> <br />
                            </>
                        );
                    })}
                </div>
            </div>
            <small style={{ color: "white", marginTop: "200px" }}>
                Copy Right Reserved PDAC
            </small>
        </div>
    );
};

export default Footer;