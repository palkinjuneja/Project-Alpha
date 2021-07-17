import React, { useState, useEffect } from "react";
import DataService from "../services/backendRoutes"
import "../styles/figmaProfile.css";


const LinkedInImport = () => {

  const [details, setDetails] = useState("")

  
  useEffect(() => {
    retrieveProfile();
  }, []);

  const retrieveProfile = () => {
    DataService.getProfile()
      .then(response => {
        console.log(response.data);
        setDetails(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      { details ? (
      <div className='linkedInImport'>
        <div className='relativeWrapperTwo'>
          <div className='rectangle61' />
          <div className='navbar'>
            <div className='logo'>
              <div className='relativeWrapperOne'>
                <p className='u'>U</p>
                <p className='uTwo'>U</p>
              </div>
              <p className='union'>Union</p>
            </div>
            <p className='editYourProfile'>
              Edit Your Profile
            </p>
            <p className='help'>Help?</p>
          </div>
          <img
            alt="cant load img"
            className='rectangle2'
            src={details.photos[3].value}
          />
        </div>
        <div className='group188'>
          <div className='group'>
            <img
              alt=""
              className='vector'
              src="https://static.overlay-tech.com/assets/07b18a70-8a9e-428d-8c74-d7d90184d3ad.svg"
            />
            <img
              alt=""
              className='vectorTwo'
              src="https://static.overlay-tech.com/assets/20c4a33b-5f48-46a7-87eb-de2c8a708099.svg"
            />
            <div className='flexWrapperOne'>
              <div className='vectorThree' />
              <div className='flexWrapperNineteen'>
                <img
                  alt=""
                  className='vectorFour'
                  src="https://static.overlay-tech.com/assets/b56193b1-db59-41b9-b3f0-6f31b102cfc0.svg"
                />
                <img
                  alt=""
                  className='vectorFive'
                  src="https://static.overlay-tech.com/assets/d1ec4162-a0ec-4247-b811-c457c0ab889f.svg"
                />
                <img
                  alt=""
                  className='vectorFour'
                  src="https://static.overlay-tech.com/assets/ef84d963-ef93-49f2-aa40-492fd3e63eee.svg"
                />
              </div>
              <div className='flexWrapperNineteen'>
                <img
                  alt=""
                  className='vectorSix'
                  src="https://static.overlay-tech.com/assets/0d0da329-30b8-4542-aa2d-65d4bc127fbf.svg"
                />
                <img
                  alt=""
                  className='vectorSix'
                  src="https://static.overlay-tech.com/assets/490539b3-9449-4c93-bde9-a900f7fb10fd.svg"
                />
              </div>
            </div>
            <div className='flexWrapperTwo'>
              <img
                alt=""
                className='vectorSeven'
                src="https://static.overlay-tech.com/assets/9a76eddf-9687-43e2-884d-8ede9ecc89a8.svg"
              />
            </div>
          </div>
          <p className='num3HrsPerWeek'>
            3 Hrs per week
          </p>
        </div>
        <div className='flexWrapperFourteen'>
          <div className='flexWrapperTwentyOne'>
            <div className='name'>
              <p className='jennyWillson'>
                {details.displayName}
              </p>
              <div className='flexWrapperTwentyFour'>
                <img
                  alt=""
                  className='group187'
                  src="https://static.overlay-tech.com/assets/082295a3-532e-4db4-8e2e-ac4ec73a5616.svg"
                />
                <p className='uxDesignLeadership'>
                  Ux Design Leadership &#64;
                  <strong
                    className='uxDesignLeadershipEmphasis1'
                  >
                    Google
                  </strong>
                </p>
              </div>
              <div className='flexWrapperTwentyFive'>
                <img
                  alt=""
                  className='group186'
                  src="https://static.overlay-tech.com/assets/01c375ba-7d45-44cb-be42-ca2b4ed94a67.svg"
                />
                <p className='jennyWilsonCom'>
                  {details.emails[0].value}
                </p>
              </div>
            </div>
            <div className='flexWrapperTwentyFive'>
              <img
                alt=""
                className='vectorEight'
                src="https://static.overlay-tech.com/assets/12bf93cb-e0bd-4802-9896-fe8231d7940f.svg"
              />
              <img
                alt=""
                className='vectorNine'
                src="https://static.overlay-tech.com/assets/8da43f86-61ce-4e56-a736-0684003c3962.svg"
              />
              <img
                alt=""
                className='vectorEight'
                src="https://static.overlay-tech.com/assets/f0ff8d8a-050f-4abe-ba3f-140a8b0b77fe.svg"
              />
            </div>
          </div>
          <div className='flexWrapperTwentyOne'>
            <p className='experience'>Experience</p>
            <div className='flexWrapperThree'>
              <div>
                <textarea className="textArea">
                      Tell us about yourself
                </textarea>
              </div>
            </div>
          </div>
        </div>
        <p className='skills'>Skills</p>
        <div className='flexWrapperFour'>
          <div className='flexWrapperSixteen'>
            <p className='addSkill'>Add skill</p>
            <div className='flexWrapperFive' />
          </div>
          <div className='flexWrapperSix'>
            <p className='skillExDesign'>
              Skill (ex: Design )
            </p>
          </div>
          <p className='suggestedSkills'>
            Suggested skills:
          </p>
          <div className='flexWrapperSeventeen'>
            <div className='flexWrapperSeven'>
              <div className='flexWrapperTwentyFive'>
                <p className='webDesign'>Web Design</p>
                <img
                  alt=""
                  className='vectorTen'
                  src="https://static.overlay-tech.com/assets/8b3e108e-83b2-4804-80b6-346895f76d26.svg"
                />
              </div>
            </div>
            <div className='flexWrapperEight'>
              <div className='flexWrapperTwentyFive'>
                <p className='figma'>Figma</p>
                <img
                  alt=""
                  className='vectorEleven'
                  src="https://static.overlay-tech.com/assets/78790e16-750f-4381-9b0e-0d6d25dc2577.svg"
                />
              </div>
            </div>
            <div className='flexWrapperNine'>
              <div className='flexWrapperTwentyFive'>
                <p className='webDesign'>Adobe Xd</p>
                <img
                  alt=""
                  className='vectorTwelve'
                  src="https://static.overlay-tech.com/assets/94db9f59-b542-40a4-93ab-d5e73164197c.svg"
                />
              </div>
            </div>
          </div>
          <div className='flexWrapperEighteen'>
            <div className='flexWrapperTen'>
              <div className='flexWrapperTwentyFive'>
                <p className='webDesign'>Mongo DB</p>
                <img
                  alt=""
                  className='vectorThirteen'
                  src="https://static.overlay-tech.com/assets/2a6b514a-1124-4898-a737-02045a43c6b4.svg"
                />
              </div>
            </div>
            <div className='flexWrapperEleven'>
              <div className='flexWrapperTwentyFive'>
                <p className='webDesign'>Python</p>
                <img
                  alt=""
                  className='vectorFourteen'
                  src="https://static.overlay-tech.com/assets/dc0089f3-773e-4dc0-85f0-e20addb5a6f0.svg"
                />
              </div>
            </div>
            <div className='flexWrapperTwelve'>
              <div className='flexWrapperTwentyFive'>
                <p className='mythrilJs'>Mythril Js</p>
                <img
                  alt=""
                  className='vectorFifteen'
                  src="https://static.overlay-tech.com/assets/fd70cc8d-a1ac-44a3-a73d-25bec39f73ee.svg"
                />
              </div>
            </div>
          </div>
          <div className='line1' />
        </div>
        <div className='flexWrapperFifteen'>
          <div className='flexWrapperThirteen'>
            <p className='save'>Save</p>
          </div>
          <div className='group175'>
            <p className='edit'>Edit</p>
          </div>
        </div>
      </div>
      ) : (
        <div className="noItem">
          <h1>Loading...</h1>
        </div>
      ) }
    </div>
  );
};

export default LinkedInImport;