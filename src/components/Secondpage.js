import React from "react";


const Secondpage = (props) => {
    const url = window.location.href;

    const lastSegment = url.split("/").pop();


    const newurl = `http://${url.split("/")[2]}/greet/${lastSegment}`;
    console.log(newurl);






    return (
        <>
            <h1 className="from" > {lastSegment} </h1>
            <h2> wishes you a very happy rakshabandhan</h2>



            <button>
                <a style={{ textDecoration: "none" }} href={`whatsapp://send?text=${newurl}`} dataAction="share/whatsapp/share" target="_blank" >Share on Whatsapp</a>

            </button>



        </>
    )
}

export default Secondpage;