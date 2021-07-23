import "./suto.css";
import React from 'react'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.



const Suto = () => {


return (
<>


  <div className="FrameContainer">
    {/* <h1>test test</h1> */}
    <div className="LeftContainer">
      <img src="https://i.pinimg.com/originals/29/06/49/29064960c2b0e3b0ab3fa1e9005ee971.jpg" alt="foto gunung"></img>
    </div>

    <div className="RightContainer">
      <div className="Title">
       <p>An Above Average Experience</p>
      </div>

      <div className="Paragraph">
        <p>Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and
          witness beauty.</p>
      </div>

      <div className="Small Box">
        
      </div>


    </div>

  </div>


</>
);
};

export default Suto;