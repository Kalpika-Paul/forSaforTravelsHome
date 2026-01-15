import React, { useEffect, useState } from 'react';

const Productrange = () => {
  const [visible, setVisible] = useState(false);

  const offers = [
    { title: "Air Ticketing Offer", desc: "Save up to 20% on selected flights." },
    { title: "Hotel Booking Deal", desc: "Hotels starting from $50/night." },
    { title: "Tour Packages Discount", desc: "Get 15% off on summer tours." },
  ];

  useEffect(() => {
  
    setTimeout(() => setVisible(true), 100); 
  }, []);

  return (
    <section className='sectionTwo'>
      <div className="container">
        <h2 className='placeTop text-center'>Our Special Offers</h2>
        <p className='text-center'>Grab early before the offer ends</p>

        <div className="row px-3 gap-3 justify-content-center">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`col-12 col-md-3 fade-in-right ${visible ? 'show' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }} 
            >
              <div className="ticket-card p-3 mb-3 shadow-sm">
                <h5 className="mb-2">{offer.title}</h5>
                <p className="small mb-3">{offer.desc}</p>
                <button className="btn btn-primary btn-sm">Show More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Productrange;
