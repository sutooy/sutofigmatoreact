import "./suto.css";
import React from 'react'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.



const Suto = () => {


return (
<>


  <div className="FrameContainer" id="main">
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

      <div className="SmallBox">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Eo_circle_grey_arrow-right.svg/768px-Eo_circle_grey_arrow-right.svg.png" alt="arrow"></img>
      {/* <img src="https://lh3.googleusercontent.com/proxy/8QjJNSImsNvh6Eyrih4jRfPj4Issw5YFUVf5PxRvs2-FJBpYicXGTgk8LaRVQf26_SIni2UH-GdKm_VcTsKmB5G13axNSto8cBVk9tRRHse9" alt="arrow"></img> */}
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/VisualEditor_-_Icon_-_External-link.svg/768px-VisualEditor_-_Icon_-_External-link.svg.png" alt="arrow"></img> */}
      
      </div>


    </div>

  </div>


</>
);
};

export default Suto;