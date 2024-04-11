import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import watchImage from "../../img/wristwatch_4305522.png";

//create your first component
const Home = (props) => {
	return (
	<div className="row" style={{backgroundColor:'red', color: 'white', fontSize:'1000 px', fontWeight:'bold', padding: 50}}>
		<div className="col-6">
		<img src="wristwatch_4305522.png" width='50px'/>
			</div>
		<div className="col-1">{props.digitSix}</div>
		<div className="col-1">{props.digitFive}</div>
		<div className="col-1">{props.digitFour}</div>
		<div className="col-1">{props.digitThree}</div>
		<div className="col-1">{props.digitTwo}</div>
		<div className="col-1">{props.digitOne}</div>
	</div>
	);
};

export default Home;
