import React from "react";

export default function ProductDetailLayout(
    {children} : 
    { children : React.ReactNode }
){

    return(
        <> {children}
            <h2>Detail Feature Product</h2>
           
        </>
    )
}