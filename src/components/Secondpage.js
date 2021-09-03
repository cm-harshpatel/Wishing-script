import React from "react";
import image from "./images/img.jpg";


const Secondpage = (props) => {
    const url = window.location.href;

    const lastSegment = url.split("/").pop();

    const newname = lastSegment.replace("_", " ");

    const newnamepro = newname.replace("_", " ");







    const newurlpro = `http://${url.split("/")[2]}/greet-from/${lastSegment}`;
    console.log(newurlpro);






    return (
        <>
            {/* <h1 className="from" style={{ textTransform: "capitalize" }} > {newnamepro} </h1>
            <h2> Wishes you a very happy rakshabandhan</h2>



            <button>
                <a style={{ textDecoration: "none" }} href={`whatsapp://send?text=${newnamepro} ने आपके लिए कुछ भेजा है जल्दी से *नीली लाइन* को टच करके देखो ${newurlpro}`} dataAction="share/whatsapp/share" target="_blank" >Share on Whatsapp</a>

            </button> */}
            <div style={{
                margin: "25px auto",
                paddingBottom: "30px",
                width: "97%", maxWidth: "1650px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid red"
            }}>


                <h1 style={{ width: "90%", padding: "0 auto", margin: "10px 0", textAlign: "center", color: "blue" }} className="from" > {newnamepro} </h1>
                <h2 style={{ width: "90%", padding: "0 auto", textAlign: "center", color: "red", margin: "10px auto" }}> Wishes You a Very Happy</h2>
                <h2 style={{ width: "90%", padding: "0 auto", textAlign: "center", color: "red", margin: "10px auto", marginTop: "5px" }}>Ganesh Chaturthi</h2>


                <div className="image" style={{ margin: "20px 0" }}>
                    <img src={image} alt="image" />

                </div>

                <button style={{ width: "276px", fontSize: "25px", border: "none", background: "none", border: "1px solid blue", marginTop: "10px" }}>
                    <a style={{ textDecoration: "none" }} href={`whatsapp://send?text=${newnamepro} ने आपके लिए कुछ भेजा है जल्दी से *नीली लाइन* को टच करके देखो ${newurlpro}`} dataAction="share/whatsapp/share" target="_blank" >Share on Whatsapp</a>

                </button>
            </div>



        </>
    )
}

export default Secondpage;