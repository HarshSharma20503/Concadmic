// components imported from packages
import React from 'react'

// CSS components
import "./Pages.scss";

function events() {
  return (
    <>
      <div className="chat">
        <h2><span>Events</span></h2>

        <div className="card-row">

          <div className="card">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/625b946762b20_jiit_osa.png" className="card-img"/>
            <div className="card-detail">
              <h3>Optica Hackathon</h3>
              <p>
              JIIT-Optica Student Chapter is Jaypee Institute of Information Technology’s only internationally recognised scientific body which conducts workshops on the latest skills in STEM, go for industry visits, compete in hackathons, do some research and attend international conferences. Just like many past events like JSCOP, the Optica Society of JIIT is hosting an Inhouse Hackathon from 11th - 13th January 2023.
              </p>
              <div className="card-button">
              <a className="button btn btn-primary" href="https://www.jiitopticachapter.com/">For More Information</a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="http://saacmag.com/news/wp-content/uploads/2018/12/IMG_20181220_131018.jpg" className="card-img"/>
            <div className="card-detail">
              <h3>IIT-BHU Fest</h3>
              <p>
              Kashiyatra, the annual socio-cultural festival of IIT(BHU) is a three day fiesta, aimed towards mesmerizing everyone with enchanting literary, musical and artistic events. It is the largest cultural festival of northern India. IIT(BHU) biggest residential university, BHU in the holy city of Varanasi. Varanasi, the eternal city, houses plethora of traditions and has an ecstatic blend of cultures of myriad races.
              </p>
              <div className="card-button">
              <a href="https://www.kashiyatra.org" className="button btn btn-primary">For More Information</a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://s3.ap-south-1.amazonaws.com/ulektzmumbai/event_dir/photos/mindspark%202023@2x.png" className="card-img"/>
            <div className="card-detail">
              <h3>Pune Fest "MindSpark"</h3>
              <p>
              MindSpark is COEP Technological University’s annual, national-level technical festival and the largest festival in Pune. COEP Technological University is an autonomous engineering college. It is the third oldest engineering college in Asia and is consistently ranked among the top institutions of higher education in India. This annual fest will take place from 13th-15th January 2023.
              </p>
              <div className="card-button">
              <a href="https://www.coep.org.in/campus_festivals/mindspark" className="button btn btn-primary">For More Information</a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png" className="card-img"/>
            <div className="card-detail">
              <h3>3rd ICSMDI</h3>
              <p>
              The 3rd International Conference on Smart Data Intelligence [ICSMDI 2023] organized by Kongunadu College of Engineering and Technology at Trichy, Tamil Nadu, India aims at delivering the perspective of “Intelligent Data Science”, where it is focused on State-of-the- art research, algorithmic design, data analysis and implementation on various real-time applications. 
              </p>
              <div className="card-button">
              <a href="http://icsmdi.com/2023/" className="button btn btn-primary">For More Information</a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://www.jaipuria.ac.in/wp-content/uploads/2022/12/jai-utsav-Indore-2022-23.jpg" className="card-img"/>
            <div className="card-detail">
              <h3>JAI UTSAV-Jaipuria</h3>
              <p>
              Jai Utsav is a 2-day cultural and management fest organized by Jaipuria, Indore, the event is all about synergy, passion, and compassion. A stage that has no limits for winners and performers. Jai Utsav – 2023 is set to take things a notch higher than the last year with more participants, more activities, and more fun. There is something for everyone at this rocking youth festival of the town. 
              </p>
              <div className="card-button">
              <a href="https://www.jaipuria.ac.in/jaiutsav/" className="button btn btn-primary">For More Information</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
)
}

export default events