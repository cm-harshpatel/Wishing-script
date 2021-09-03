import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "./images/img.jpg";

const Greet = () => {
    const [name, setName] = useState("")

    const url = window.location.href;

    const lastSegment = url.split("/").pop();

    console.log(lastSegment);


    const newname = lastSegment.replace("_", " ");

    const newnamepro = newname.replace("_", " ");












    return (
        <>
            {/* <h1 className="from" style={{ textTransform: "capitalize" }}> {newnamepro} </h1>
            <h2> wishes you a very happy rakshabandhan</h2>

            make yours like this
            <form>

                <div>

                    <input placeHolder="apna name yaha likhe" type="text" name="text" id="text"
                        value={name}
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        }>
                    </input>

                </div>




                <Link to={`/${name}`}>
                    <button type="submit" >Enter</button>
                </Link>
            </form> */}

            <div style={{
                margin: "25px auto",
                paddingBottom: "30px",
                width: "97%", maxWidth: "1650px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid red"
            }}>

                <h1 style={{ width: "90%", padding: "0 auto", textAlign: "center", color: "blue" }} className="from" > {newnamepro} </h1>

                <h2 style={{ width: "90%", padding: "0 auto", textAlign: "center", color: "red", margin: "10px auto" }}> Wishes You a Very Happy</h2>
                <h2 style={{ width: "90%", padding: "0 auto", textAlign: "center", color: "red", margin: "10px auto", marginTop: "5px" }}>Ganesh Chaturthi</h2>

                <div className="image" style={{}}>
                    <img src={image} alt="image" />

                </div>

                <p>अपना WISHING कार्ड बनाने के लिए</p>
                <form style={{
                    width: "90%", display: "flex",
                    flexDirection: "column", alignItems: "center"
                }}>

                    <div >

                        <input style={{
                            width: "100%", fontSize: "22px", margin: "10px auto",
                            padding: "0 0"
                        }} placeholder="👉 यहाँ अपना नाम लिखें..." type="text" name="text" id="text"
                            value={name}
                            onChange={
                                (e) => {
                                    setName(e.target.value);
                                }
                            }>
                        </input>

                    </div>

                    <Link to={`/${name}`} style={{ width: "276px", fontSize: "25px", border: "none", background: "none", border: "1px solid blue" }}>
                        <button style={{ width: "100%", height: "42px", fontSize: "22px" }} type="submit" >देखें</button>
                    </Link>


                </form>

            </div>

        </>
    )
}

export default Greet;