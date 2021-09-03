import React from "react";


const Secondpage = (props) => {
    const url = window.location.href;

    const lastSegment = url.split("/").pop();

    const newname = lastSegment.replace("_", " ");

    const newnamepro = newname.replace("_", " ");







    const newurlpro = `http://${url.split("/")[2]}/greet-from/${lastSegment}`;
    console.log(newurlpro);






    return (
        <>
            <h1 className="from" style={{ textTransform: "capitalize" }} > {newnamepro} </h1>
            <h2> Wishes you a very happy rakshabandhan</h2>



            <button>
                <a style={{ textDecoration: "none" }} href={`whatsapp://send?text=${newnamepro} ने आपके लिए कुछ भेजा है जल्दी से *नीली लाइन* को टच करके देखो ${newurlpro}`} dataAction="share/whatsapp/share" target="_blank" >Share on Whatsapp</a>

            </button>



        </>
    )
}

export default Secondpage;