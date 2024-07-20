import PropTypes from "prop-types";


const UserData=[
    {
        name:"Sangeetha",
        city:"New York",
        description:"Front-end developer",
        skills:["UI /UX","Front-end Development","HTML","CSS","Javascript","React","Node"],
        online:false,
        profile:"IMAGES/demo2.jpg"
    },
    {
        name:"Mohammed Ijjas",
        city:"Paris",
        description:"Full Stack web developer",
        skills:["vlogging","Web Development","HTML","CSS","Javascript","React","Angular"],
        online:true,
        profile:"IMAGES/demo1.jpg"
    },
    {
        name:"Vidhya",
        city:"Califonia",
        description:"Senior Software developer",
        skills:["C","Java","Python","MySQL","MongoDB"],
        online:true,
        profile:"IMAGES/demo2.jpg"
    }


]

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online? "pro online":"pro offline"}>{props.online?"ONLINE": "OFFLINE"}</span>
      <img src={props.profile} alt="user" className="img" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Usercard = () => {

    return (
    <>
        {
            UserData.map((user,index)=>(
                <User  key={index}  
                name={user.name}
                city={user.city}
                description={user.description}
                online={user.online}
                profile={user.profile}
                skills={user.skills}
                
                
                />

            ))}
    
    
    </>

)



//   return (
//     <User
//       name="Sangeetha"
//       city="New York"
//       description="front-end developer"
//       skills={[
//         "UI/UX",
//         "Front End Development",
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React",
//         "Node",
//       ]}
//       online={true}
//       profile="IMAGES/demo2.jpg"
//     />
//   );
};


User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired
  };