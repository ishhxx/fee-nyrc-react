import React, { useEffect } from 'react'

const Slider = () => {

    useEffect(() => {
    const contents = document.querySelectorAll(".slide-content");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let currentIndex = 0;

    function showContent(index) {
        contents.forEach((content, i) => {
            if (i === index) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function nextContent() {
        currentIndex = (currentIndex + 1) % contents.length;
        showContent(currentIndex);
    }

    function prevContent() {
        currentIndex = (currentIndex - 1 + contents.length) % contents.length;
        showContent(currentIndex);
    }

    prevBtn.addEventListener("click", prevContent);
    nextBtn.addEventListener("click", nextContent);
});

  return (
    <div className="container12">
        <div className="slide-content active" id="content1">
            <p><b>The brand's unique and innovative design aesthetics cemented NYRC's[Not Your Regular Cover]</b></p>
            <p><b>position among popular brands</b></p>
            <img src="/image/your_story.jpg" alt="your_story" />
        </div>
        <div className="slide-content" id="content2">
            <p><b>A way out for anyone who wants to see their favourite</b></p>
            <p><b>superhero/character/cartoon every time they pick up their phone</b></p>
            <img src="/image/Hindu.jpeg" alt="The-Hindu" width="200px" />
            
        </div>
        <div className="button-container">
            <button id="prevBtn"><span>&#9664;</span></button>
            <div className="dots">
                <span className="dot active"></span>
                <span className="dot"></span>
            </div>
            <button id="nextBtn"><span>&#9654;</span></button>
        </div>
    </div>
  )
}

export default Slider
