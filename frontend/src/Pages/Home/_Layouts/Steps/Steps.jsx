import React from "react";
import "./HowItWorks.css";

const HowItworks = () => {
  return (
    <div className="hiw-section">
      <h1>How It Works</h1>
      <div className="timeline-main">
        <div className="timeline-wrap">

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">1. Create an Account</h2>
                <h6 className="timeline-card-subhead">Get Started Safely</h6>
              </div>
              <p className="timeline-card-text">
                Sign up using your phone number or email to access emergency services.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">2. Set Emergency Details</h2>
                <h6 className="timeline-card-subhead">Personalize Response</h6>
              </div>
              <p className="timeline-card-text">
                Add your emergency contacts, health info, and location settings.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">3. Press the SOS Button</h2>
                <h6 className="timeline-card-subhead">Instant Alert</h6>
              </div>
              <p className="timeline-card-text">
                In an emergency, press the SOS button to alert nearby responders.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">4. Location Sent Automatically</h2>
                <h6 className="timeline-card-subhead">Stay Visible</h6>
              </div>
              <p className="timeline-card-text">
                Your real-time location and emergency details are shared with responders.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">5. Get Help Immediately</h2>
                <h6 className="timeline-card-subhead">Live Support</h6>
              </div>
              <p className="timeline-card-text">
                Emergency services or trusted contacts are dispatched to your location.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">6. Stay Connected</h2>
                <h6 className="timeline-card-subhead">Real-Time Updates</h6>
              </div>
              <p className="timeline-card-text">
                Receive updates from responders and communicate if safe.
              </p>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">7. Follow Up & Feedback</h2>
                <h6 className="timeline-card-subhead">Improve the System</h6>
              </div>
              <p className="timeline-card-text">
                After the situation, rate the response and help us improve the service.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowItworks;
