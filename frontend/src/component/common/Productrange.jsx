import React from 'react'

import CateOne from "../../assets/img/home-appliance.jpg";
import CateTwo from "../../assets/img/kitchen_appli.webp";
import CateThree from "../../assets/img/fridge.jpg";
import CateFour from "../../assets/img/tv.avif";
import CateFive from "../../assets/img/acce.png";
const Productrange = () => {
  return (
    <section className='sectionTwo'>
        <div className="container">
          <h2 className='categoryTop py-5 text-center'>Our Product Range</h2>

          <div className="row px-5 gap-5 justify-content-center">
            <div className="col-6 col-md-2 imgcol im fade">
              <img src={CateOne} alt="Home Appliances" width={250} />
              <div className="img-title">Home Appliances</div>
            </div>
            <div className="col-6 col-md-2 imgcol im fade">
              <img src={CateTwo} alt="Kitchen Appliances" width={250} />
              <div className="img-title">Kitchen Appliances</div>
            </div>
            <div className="col-6 col-md-2 imgcol im fade">
              <img src={CateThree} alt="Refrigerator" width={250} />
              <div className="img-title">Refrigerator</div>
            </div>
            <div className="col-6 col-md-2 imgcol im fade">
              <img src={CateFour} alt="LED TV" width={250} />
              <div className="img-title">LED TV</div>
            </div>
            <div className="col-6 col-md-2 imgcol im fade">
              <img src={CateFive} alt="Accessories" width={250} />
              <div className="img-title">Accessories</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Productrange
