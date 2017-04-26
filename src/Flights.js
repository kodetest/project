import React from 'react';
import './Flights.css';

const OnceFlight = params => (
  <div className="Flight-container">
    <div className="Flight-time">
      {params.data.outdate} ➙ {params.data.indate}
    </div>
    <div className="Flight-price">{params.data.price}</div>
  </div>
);

const Flights = props => (
  <div className="Flights">
    <div className="Flights-container">

      {!!props.flights.departure
        ? props.flights.data.length > 0
            ? props.flights.data.map((item, index) => (
                <div className="Flights-item" key={index}>
                  <OnceFlight data={item} />
                </div>
              ))
            : <div>Нет рейсов</div>
        : null}
    </div>
  </div>
);

export default Flights;
