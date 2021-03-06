import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
   const [name, setName] = useState("");
   const [room, setRoom] = useState("");
   return (
      <div>
         <div className="joinOuterContainer">
            <div className="joinInnerContainer">
               <h1 className="heading">Join</h1>

               <div>
                  <input
                     placeholder=""
                     className="joinInput"
                     type="text"
                     onChange={(event) => setName(event.target.value)}
                  ></input>
               </div>
               <div>
                  <input
                     placeholder=""
                     className="joinInput mt-20"
                     type="text"
                     onChange={(event) => setRoom(event.target.value)}
                  ></input>
               </div>
               <Link
                  onClick={(event) =>
                     !name || !room ? event.preventDefault() : null
                  }
                  to={`/chat?name=${name}&room=${room}`}
               >
                  <button cLassName={"button mt-20 btn-primary"} type="submit">
                     Sign in Now
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Join;
