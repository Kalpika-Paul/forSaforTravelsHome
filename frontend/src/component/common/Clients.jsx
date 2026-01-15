import React from 'react'
import Client from '../../assets/img/client.jpg'
const Clients = () => {
    return (

        <section className='clientback py-5 mb-5'>
            <div className="container">
                <div className="row align-items-center">


                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <img
                            src={Client}
                            alt="Happy client"
                            className="img-fluid rounded"
                        />
                    </div>


                    <div className="col-12 col-md-6">
                        <h1 className='fs-1 fw-bold mb-3'>What Our Clients Say</h1>
                        <p className="mb-4">
                            Our guests love the <strong>comfort</strong>, <strong>service</strong>, and <strong>hospitality</strong> we provide. From luxurious rooms to friendly staff and unforgettable experiences, every stay is designed to create lasting memories.
                        </p>

                        <p className="mb-3">
                            <strong>“Exceptional service and great value.”</strong>
                            From booking to checkout, everything was smooth and hassle-free. The rooms were spacious, and the views were amazing. Highly recommended!
                            — <span style={{ fontWeight: 500 }}>xyz</span>
                        </p>

                        <p className="mb-3">
                            <strong>“A perfect place to relax and unwind.”</strong>
                            The atmosphere was peaceful, and the amenities exceeded my expectations. It truly felt like a home away from home.
                            — <span style={{ fontWeight: 500 }}>xyz</span>
                        </p>

                        <p>
                            <strong>“Loved every moment of our stay.”</strong>
                            The location, service, and comfort were outstanding. This hotel made our vacation even more special.
                            — <span style={{ fontWeight: 500 }}>xyz</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Clients
