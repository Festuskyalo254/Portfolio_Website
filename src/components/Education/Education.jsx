import './Education.css'

const Education = () => {
  return (
    <div className='education'>
      <div className="education-title">
        <h1>My Education<span>.</span></h1> 
      </div>

      <div className="education-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/masinde_campus.jpg" alt="Al-Nafi International College" />
            </div>
            <div className="timeline-text">
              <h3>Degree in Information Systems ( 4yrs tri-semester course)</h3>
              <p className="timeline-date">2021 - 2025</p>
              <p className="timeline-details">
                Completed my Degree in Information Systems from  Masinde Muliro University;Main Campus, Kakamega, Kenya.
              </p>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/nthangu.jpg" alt="Nthangu Secondary" />
            </div>
            <div className="timeline-text">
              <h3>Kenya Certificate of Secondary Education (KCSE)</h3>
              <p className="timeline-date">2017 - 2021</p>
              <p className="timeline-details">
                Nthangu Secondary School
              </p>
            </div>
          </div>
        </div>
<div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/elimu.jpg" alt="Elimu Resource Center" />
            </div>
            <div className="timeline-text">
              <h3> IT Essentials (Cisco)</h3>
              <p className="timeline-date">2021 - 2021</p>
              <p className="timeline-details">
                Elimu Resource Center- Malindi
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-image">
              {/* Access directly from public folder */}
              <img src="/elimu.jpg" alt="Elimu Resource Center" />
            </div>
            <div className="timeline-text">
              <h3> Software Engineering Basics (Digitech Program)</h3>
              <p className="timeline-date">2025 - ongoing</p>
              <p className="timeline-details">
                Elimu Resource Center- Malindi
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education