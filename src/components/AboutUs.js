import React from "react";
import hodSir from './hod_sir.jpg';
import yash from './Yash.jpg';
import vikash from './Vikash.jpg';
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Saving lives, one drop at a time. Our mission is to make blood
          donation easy, accessible, and impactful.
        </p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to bridging the gap between blood donors and those
            in need. Our platform connects donors with blood banks and
            hospitals, ensuring that every donation makes a difference. By
            providing reliable information, convenient scheduling, and real-time
            tracking, we aim to make the donation process smooth and
            transparent.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a world where no life is lost due to a
            shortage of blood. We strive to build a community of regular donors
            and ensure that blood is always available for those who need it the
            most. Through awareness campaigns, community events, and
            partnerships with healthcare organizations, we work tirelessly to
            achieve this goal.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>

          {/* First Row: 3 members */}
          <div className="team-members">
            <div className="team-member">
              <img src="https://assets.telegraphindia.com/abp/2022/Dec/1670953883_laxman.jpg" alt="Founder" />
              <h3>Lakshman Seth</h3>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <img src="https://himhaldia.edu.in/public/storage/instructors/February2022/qiP7HQQpDDhwnC2qpHeT.webp" alt="Co-Founder" />
              <h3>Ashish Lehri</h3>
              <p>Co-Founder & General Secratory</p>
            </div>
            <div className="team-member">
              <img src={hodSir} alt="Head Of Department" />
              <h3>Chanchal Kumar De</h3>
              <p>Head of Department</p>
            </div>
          </div>

          {/* Second Row: 2 members */}
          <div className="team-members second-row">
            <div className="team-member">
              <img src={yash} alt="Website Designer" />
              <h3>Yash Raj</h3>
              <p>Website Designer</p>
            </div>
            <div className="team-member">
              <img src={vikash} alt="Website Developer" />
              <h3>Vikash Kumar</h3>
              <p>Website Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in Saving Lives</h2>
        <p>
          Whether you're a donor, volunteer, or advocate, you can help us
          achieve our mission. Together, we can make sure that no one has to
          wait for the blood they need. Become a part of our community today.
        </p>
        <a href="/donate" className="donate-link">
          Become a Donor
        </a>
      </section>
    </div>
  );
}

export default AboutUs;
