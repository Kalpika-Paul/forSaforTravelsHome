import React from 'react'
import AdvImage from '../../assets/img/9.jpeg';
import AdvImageSmone from '../../assets/img/3.jpeg';
import AdvImageSmtwo from '../../assets/img/4.jpeg';
import AdvImageBig from '../../assets/img/6.jpeg';


const Advertise = () => {
  return (
    <section className='sectionFive'>
    <div className="container mt-5 py-5">
      <p className='advertiseTop text-center text-white'>Our Latest</p>
      <h4 className='text-center text-white mb-5'>Explore Our Latest Solutions</h4>

      <div className="row align-items-center mb-3">


        <div className="col-md-4 fade mb-3 mb-md-0">
          <img src={AdvImage} alt="Tycoon Smart Solutions" className='img-fluid' />
        </div>


        <div className="col-md-4">
          <div className="d-flex flex-column gap-3">
            <img src={AdvImageBig} alt="Tycoon Smart Solutions" className='fade img-fluid' />

            <div className="d-flex gap-3 flex-wrap">
              <img src={AdvImageSmone} alt="Tycoon Smart Solutions" className='fade img-fluid' />
              <img src={AdvImageSmtwo} alt="Tycoon Smart Solutions" className='fade img-fluid' />
            </div>
          </div>
        </div>


        <div className="col-md-4 fade mb-3 mb-md-0">
          <img src={AdvImage} alt="Tycoon Smart Solutions" className='img-fluid' />
        </div>

      </div>
    </div>
  </section>
  )
}

export default Advertise
