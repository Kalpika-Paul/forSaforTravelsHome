import React, { useState } from "react";
import SectionImage from "../../assets/img/sectionImg.jpg";
import { FaSearch } from "react-icons/fa";

const Backimage = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <section className="section-1">
      <div className="search-container">
       <h2 className="text-primary">Where is your next tour plan!</h2>
        <div className="tabs">
          <button
            className={activeTab === "hotel" ? "active" : ""}
            onClick={() => setActiveTab("hotel")}
          >
            Hotel
          </button>
          <button
            className={activeTab === "flight" ? "active" : ""}
            onClick={() => setActiveTab("flight")}
          >
            Flight
          </button>
        </div>

        <div className="tab-content">
          <div className="input-wrapper">
            {activeTab === "hotel" && (
              <input type="text" placeholder="Search for hotels..." />
            )}
            {activeTab === "flight" && (
              <input type="text" placeholder="Search for flights..." />
            )}
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>

      <img src={SectionImage} alt="Background" className="backimage" />
    </section>
  );
};

export default Backimage;
