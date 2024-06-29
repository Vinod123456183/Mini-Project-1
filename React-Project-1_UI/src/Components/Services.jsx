import React from 'react';

function Services() {
  return (
    <div className="services-container">
      <h2>Our Features & Services</h2>
      <div className="services">
        <div className="service-card">
          <img src="communication-icon-url" alt="Communications" />
          <h3>Communications</h3>
          <p>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
          <button>MORE</button>
        </div>
        <div className="service-card">
          <img src="design-icon-url" alt="Inspired Design" />
          <h3>Inspired Design</h3>
          <p>Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
          <button>MORE</button>
        </div>
        <div className="service-card">
          <img src="happy-customers-icon-url" alt="Happy Customers" />
          <h3>Happy Customers</h3>
          <p>Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
          <button>MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
