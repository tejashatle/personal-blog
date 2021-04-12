import React from 'react'
import { faHome, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function quotes_intro() {
    return (
        <div>
            <div className="container-fluid quote-block">


                <div className="row">
                    <div className="col-3 left-quote">
                        {/* <img src=""></img> */}
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>

                    <div className="col-6 quote">
                        “Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”
                        <span className="mt-3">- Linus Torvalds</span>
                    </div>

                    <div className="col-3 right-quote">
                        {/* <img src=""></img> */}
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </div>

                </div>
                
               
                

            </div>
        </div>
    )
}

export default quotes_intro
