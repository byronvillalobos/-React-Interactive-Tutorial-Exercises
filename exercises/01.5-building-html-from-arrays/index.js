import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// const navlinkItems = [
// 	<ul className="nav">
// 		<li className="nav-item">
// 			<a className="nav-link" href="#">
// 				Link to google.com
// 			</a>
// 		</li>
// 		<li className="nav-item">
// 			<a className="nav-link" href="#">
// 				Link to facebook.com
// 			</a>
// 		</li>
// 		<li className="nav-item">
// 			<a className="nav-link" href="#">
// 				Link to amazon.com
// 			</a>
// 		</li>
// 	</ul>
// ];

const socialnet = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];
const navlinkItems = socialnet.map((social, i) => {
	return (
		<li className="nav-item" key={i}>
			<a className="nav-link" href="#">
				{social}
			</a>
		</li>
	);
});

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
