import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

export function Principal () {
    
    return(
        <div className="principal">
            <div className="content">
                <h1>
                Your Disinfection and Prevention Partners
                </h1>
                <p className="prevention">
                We understand that with the re-opening of your business, you are concerned with the Health and Safety of your customers and employees. This is why CARVAN is leading in disinfecting services to help our local businesses get up and running and prevent spread of CORONAVIRUS COVID19.
                </p>
                <form className="search">
                    <div>
                        <input type="text" placeholder="Enter Service..." />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label>Home</label>
                        <input type="radio"/>
                        <label>Commercial</label>
                        <button type="submit"><AiOutlineSearch className="icon" /> </button>
                    </div>
                </form>
            </div>


        </div>
    )
}