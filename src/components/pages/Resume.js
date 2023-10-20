import NavBar from "../Navbar";
import '../componentStyles/Resume.css'

const Resume = () => {

  return (
    <>
        <NavBar />
        <div className="header-container">
          <h1 className="resume-header">
            Maxwell Blamauer
          </h1>
        </div>

        <div className="body-container">
          <div className="left-body">
            <h1 className="resume-left">
              left body
            </h1>
          </div>

          <div className="right-body">
            <h1 className="resume-body">
              right body
            </h1>
          </div>
        </div>
    </>
  )
}

export default Resume;