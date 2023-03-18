import "../styles/About.css"

const About = () => {
  return (
    <section id="about">
      <h2>About Our Barber Shop</h2>
      <div className="history">
        <h3>Our History</h3>
        <p>Founded in 1985, our barber shop has been serving the community for over 35 years. We take pride in our tradition of providing excellent haircuts and exceptional customer service.</p>
      </div>
      <div className="philosophy">
        <h3>Our Philosophy</h3>
        <p>At our barber shop, we believe that a great haircut is more than just a good-looking style - it's an experience. That's why we strive to provide each customer with personalized attention and a relaxing, enjoyable visit.</p>
      </div>
      <div className="testimonials">
        <h3>Testimonials</h3>
        <ul>
          <li>"I've been coming to this barber shop for years and I wouldn't go anywhere else. The barbers are skilled and friendly, and the atmosphere is always welcoming." - John D.</li>
          <li>"I always leave this barber shop feeling refreshed and looking sharp. Highly recommend!" - Lisa M.</li>
        </ul>
      </div>
      <div className="location">
        <h3>Our Location</h3>
        <p>We're located at 123 Main Street, in the heart of downtown. Our hours are Monday - Friday, 9am - 6pm, and Saturday, 9am - 4pm. Walk-ins are welcome, but appointments are recommended.</p>
      </div>
    </section>
  );
};

export default About;
