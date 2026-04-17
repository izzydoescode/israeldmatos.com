import React, { Component } from "react";
import { goToAnchor } from "react-scrollable-anchor";
import IconLink from "./IconLink";
import Chevron from "react-icons/lib/fa/angle-double-up";
import LinkedIn from "react-icons/lib/fa/linkedin";
import Facebook from "react-icons/lib/fa/facebook";
import Instagram from "react-icons/lib/fa/instagram";
import Github from "react-icons/lib/fa/github";
import "./Footer.css";

const icons = [
	{ src: LinkedIn, url: "https://www.linkedin.com/in/izzydoescode" },
	{ src: Facebook, url: "https://www.facebook.com/izzydoescode" },
	{ src: Instagram, url: "https://www.instagram.com/izzydoescode/" },
	{ src: Github, url: "https://www.github.com/izzydoescode" },
];

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: icons,
		};
	}

	goHome = () => {
		goToAnchor("#home");
	};

	render() {
		return (
			<footer id="footer">
				<a href="#home" className="chevron-link-wrapper">
					<Chevron className="chevron" />
				</a>

				<div className="flex row icon-wrap">
					{this.state.icons.map((icon, index) => (
						<IconLink
							key={index}
							index={index}
							icon={icon.src}
							url={icon.url}
						/>
					))}
				</div>

				<div className="info-box">
					<div className="foot-note">
						ISRAEL D. MATOS
						<span className="highlight">©2017</span>
					</div>
				</div>
			</footer>
		);
	}
}
