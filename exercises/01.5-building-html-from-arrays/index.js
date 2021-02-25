import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

//OPCION1
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

//OPCION2
// const socialnet = ["Link to google.com", "Link to facebook.com", "Link to amazon.com"];
// const navlinkItems = socialnet.map((social, i) => {
// 	return (
// 		<li className="nav-item" key={i}>
// 			<a className="nav-link" href="#">
// 				{social}
// 			</a>
// 		</li>
// 	);
// });

//OPCION3
const socialnet = [
	{
		social: "Link to google.com",
		url: "http://google.com"
	},
	{
		social: "Link to facebook.com",
		url: "http://facebook.com"
	},
	{
		social: "Link to amazon.com",
		url: "http://amazon.com"
	}
];
const navlinkItems = socialnet.map(item => {
	return (
		<li className="nav-item">
			<a className="nav-link" href={item.url}>
				{item.social}
			</a>
		</li>
	);
});

//final display
const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
