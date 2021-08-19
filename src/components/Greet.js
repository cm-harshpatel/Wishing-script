import React, { useState } from "react";
import { Link } from "react-router-dom";

const Greet = () => {
    const [name, setName] = useState("")

    const url = window.location.href;

    const lastSegment = url.split("/").pop();

    console.log(lastSegment);


    const newname = lastSegment.replace("_", " ");

    const newnamepro = newname.replace("_", " ");












    return (
        <>
            <h1 className="from" style={{ textTransform: "capitalize" }}> {newnamepro} </h1>
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
            </form>

        </>
    )
}

export default Greet;