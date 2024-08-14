
import React, { useState, useEffect, useRef } from "react";
import './NavigationPanel.css';

function Panel(){
    const [activeIndex, setActiveIndex] = useState(0);
    const indicatorRef = useRef(null);
    const itemsRef = useRef([]);
  
    const handleIndicator = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      const activeItem = itemsRef.current[activeIndex];
      if (activeItem && indicatorRef.current) {
        indicatorRef.current.style.width = `${activeItem.offsetWidth}px`;
        indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
        indicatorRef.current.style.backgroundColor = activeItem.getAttribute("active-color");
      }
    }, [activeIndex]);
  
    return (
      <div className="panel">
        <nav className="nav">
          {["Home", "Qualification", "Work Experience", "Projects", "Contact"].map((item, index) => (
            <a
              href={["#Home", "#Qualification", "#work", "#Projects", "#Contact"][index]}
              key={index}
              className={`nav-item ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => handleIndicator(index)}
              active-color={["orange", "green", "blue", "red", "rebeccapurple"][index]}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ color: index === activeIndex ? itemsRef.current[index]?.getAttribute("active-color") : "black" }}
            >
              {item}
            </a>
          ))}
          <span className="nav-indicator" ref={indicatorRef}></span>
        </nav>
      </div>
    );
}

export default Panel;
