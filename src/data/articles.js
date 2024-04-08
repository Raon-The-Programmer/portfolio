import React from "react";
import image1 from './recharga.png'
function article_1() {
	return {
		date: "Nov 2023 to Dec 2023",
		title: "Full-Stack Developer (INTERNSHIP)",
		description:"As a Full Stack Intern at Recharga Chargine, I spearheaded the front end development efforts, utilizing React.js to craft a dynamic and intuitive website. Contributed directly to enhancing the company's digital presence in the sustainable energy sector. Exciting hands-on experience in a startup environment, driving innovation in electric battery technology.",
		keywords: [
			"Full Stack Developer",
			"Rahul",
			"Rahul John",
			"Recharga Chargine",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					display:flex;
					width:60vw;
					margin:10px;
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">During my internship at Recharga Chargine, I played a pivotal role in developing the company's B2B-focused website. My primary responsibility involved creating an engaging and user-friendly front end interface using React.js. This included designing and implementing features such as a newsletter subscription system, enabling users to receive regular updates directly to their email addresses. Additionally, I contributed to the creation of a captivating main page featuring animated elements to showcase the company's innovative battery solutions. Through this experience, I gained valuable insight into B2B web development and honed my skills in crafting dynamic digital experiences.</div>
					<a href="https://www.rechargachargine.com/">Official Site</a>
					<img
						src={image1}
						alt="example"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
