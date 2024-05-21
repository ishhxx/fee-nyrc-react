import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const SubFooter = () => {
    const [contexts, setContexts] = useState({
        context1: false,
        context2: false,
        context3: false,
        context4: false
    });

    const toggleContext = (contextId) => {
        setContexts(prevContexts => ({
            ...prevContexts,
            [contextId]: !prevContexts[contextId]
        }));
    };
    const questionsAndAnswers = [
        {
            question: "How do I track my NYRC order?",
            answer: [
                "1. Open your web browser and go to the Not Your Regular Cover website.",
                "2. Scroll down on the website until you reach the 'Information and Support' section.",
                "3. Look for the specific title or section labeled 'Order Tracking' within the 'Information and Support' area.",
                "4. Click on the 'Order Tracking' option to access the tracking functionality.",
                "5. Enter the required details, such as your order number and Email ID, as prompted.",
                "6. Once you have entered the necessary information, click on the 'Track' button to initiate the tracking process."
            ]
        },
        {
            question: "What is the return policy of NYRC purchases?",
            answer: [
                "NYRC accepts returns under the following circumstances:",
                "1. Defective product: If the received product has any defects.",
                "2. Non-compliance with product description: If the product does not match the description provided.",
                "3. It's important to note that since Coveritup products are made to order, limited to specific cases/issues.",
                "For more detailed information regarding the return policy, please click on the provided link: refund policy"
            ]
        },
        {
            question: "How can I contact customer support?",
            answer: [
                "1. To contact Coveritup customer support, you can reach out to them via email.",
                "2. Draft an email detailing the issue or concern you are facing.",
                "3. Attach any relevant images or videos that can provide support or clarification.",
                "4. Send the email to help@coveritup.in.",
                "5. You can expect a reply within 24 working hours.",
                "6. Customer support is available during the following working hours:",
                "   - Monday to Friday: 9:30 am to 5:30 pm",
                "   - Saturday: 9:30 am to 2:00 pm"
            ]
        },
        {
            question: "Do you have more questions?",
            answer: ["To read our entire FAQ section, click on the link below: FAQ's"]
        }
    ];


    return (
        <div>
            <div className="sliding-word">#StandItOut</div>
            <span className="spacer"></span>
            <div className="sliding-word">#StandItOut</div>
            <span className="spacer"></span>
            <div className="sliding-word">#StandItOut</div>
            <span className="spacer"></span>
            <div className="sliding-word">#StandItOut</div>
            <span className="spacer"></span>
            <div className="sliding-word">#StandItOut</div>
            <span className="spacer"></span>

            <div className="left">
                <img src="/image/cases.avif" alt="next" width="100%" />
            </div>
            <div className="left1">
                <img src="/image/nyrc left.jpg" alt="next" width="90%" />
            </div>
            <div className="lefttt">
                <img src="/image/lefttt.jpg" alt="next" width="90%" />
            </div>
            <div className="left3">
                <img src="/image/left3.jpg" alt="next" width="90%" />
            </div>

            <div className="right">
                <p><b>From NYRC team with love</b></p>
                <h1><b>Proudly From India</b></h1>
            </div>
            <div className="para">
                <p>As Not Your Regular Cover[NYRC], we are a team of passionate</p>    
            </div>
            <div className="para1">
                <p>pop culture enthusiasts on a mission to bring excitement and </p>
            </div>
            <div className="para2">
                <p> personality to your devices. Our journey began with a shared</p>
            </div>
            <div className="para3">
                <p>love for all things vibrant and imaginative. Founded with a </p>
            </div>
            <div className="para4">
                <p>fueled enthusiastic team, we pour our hearts in creating </p>
            </div>
            <div className ="para-cont">
                <p> phone cases that make a statement.</p>
            </div>

            <div className="know-more">
                <button><Link to="/aboutus"><b>Read More</b></Link></button>
            </div>
            <div className="question">
                <h1><b>Have a question ? </b></h1>
                <h1><b>We are here to help</b></h1>
            </div>
            <div className="video">
                <video src="./image/pexels-artem-podrez-5725953 (2160p).mp4" width="500px" height="400px" autoPlay loop></video>
            </div>

            <div>
            <div className="Container">
                {questionsAndAnswers.map((item, index) => (
                    <div key={index}>
                        <div className="Box">
                            <h1><b>{item.question}</b></h1>
                        </div>
                        <button className="button" onClick={() => toggleContext(`context${index + 1}`)}>
  {contexts[`context${index + 1}`] ? '🔼' : '🔽'}
</button>

                        <div id={`context${index + 1}`} style={{ display: contexts[`context${index + 1}`] ? 'block' : 'none' }}>
                            {item.answer.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="Line"></div>
                    </div>
                ))}
            </div>
        </div>

            <div className="pa123">
                <p>Check out the most common questions our customers asked.</p>
            </div>
            <div className="pa223">
                <p>Still have questions? Contact us</p>
            </div>

            <div className="help">
                <a href="#">help@notyourregularcover.in</a>
            </div>
            <div className="pic">
                <img src="" alt="" />
            </div>
            <div className="last-line">
                <p>Our customer support is available Monday to Friday: 9.30am-5:00pm.</p>
            </div>
        </div>
    );
}

export default SubFooter;
