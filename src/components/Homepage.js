import React, { useState } from "react";
import { Link } from "react-router-dom"
const Homepage = () => {
    const [name, setName] = useState("")

    const url = window.location.href;

    const lastSegment = url.split("/").pop();

    console.log(lastSegment);










    return (
        <>
            <h1 className="from" > {lastSegment} </h1>
            <h2> wishes you a very happy rakshabandhan</h2>

            make yours like this
            <form>

                <div>
                    <label for="text">Name </label>
                    <input type="text" name="text" id="text"
                        value={name}
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        }>
                    </input>

                </div>




                {/* <Link to={`/${name}`}>
                    <button type="submit" >Enter</button>
                </Link> */}

                <Link to={`/${name}`}>
                    <button type="submit" >Enter</button>
                </Link>


            </form>



        </>
    )
}

export default Homepage;