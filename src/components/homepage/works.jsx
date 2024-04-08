import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import Guvi from './GuviIcon.png'
import "./styles/works.css";
import Udemy from './Udemy.png'
import Infosys from './infosys.webp'

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Courses"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={Guvi}
								alt="Guvi"
								className="work-image"
							/>
							<div className="work-title">GUVI</div>
							<div className="work-subtitle">
								FullStack Development (MERN)
							</div>
							<div className="work-duration">Sep 2023 - Jan 2024</div>
						</div>

						<div className="work">
							<img
								src={Udemy}
								alt="udemy"
								className="work-image"
							/>
							<div className="work-title">Udemy</div>
							<div className="work-subtitle">
								Web development Bootcamp - GASP
							</div>
							<div className="work-duration">Dec 2022 - Jan 2023</div>
						</div>
						<div className="work">
							<img
								src={Infosys}
								alt="Infosys springboard"
								className="work-image"
							/>
							<div className="work-title">Infosys SpringBoard</div>
							<div className="work-subtitle">
								Python Essentials
							</div>
							<div className="work-duration">May 2023 - July 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
