import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import "./footer.scss";
import Logo from "../../../../public/logo.png";


const FooterComponent = () => {
	const exploreLinks = [
		{ title: "Home", link: "/" },
		{ title: "Donate Blood", link: "/donate-blood" },
		{ title: "Request Blood", link: "/need-blood" },
		{ title: "Host Blood Drive", link: "/host-blood-drive" },
		{ title: "Contact", link: "/contact" },
	];

	const contactLinks = [
		{ title: "(+91)9748054821", link: "tel:+91-9748054821" },
		{ title: "shreyak4821@gmail.com", link: "mailto:shreyak4821@gmail.com" },
		{ title: "Kolkata,West Bengal", link: "https://www.google.com/search?q=kolkata+westbengal" },
	];

	return (
		<section className="footer1 footer two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 pt-[70px] pb-[40px] bg-gradient-to-t from-dark_red to-dark">
			<div className="two-cta-container relative w-[min(100%_-_15px,1250px)] mx-auto my-0 p-2.5">
				<div className="first-section-wrapper grid sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
					<div className="name flex flex-col footer-col first-col">
						<h2 className="not-italic flex font-bold text-[40px] leading-[55px] text-white">
					        <img className="w-auto h-14" src={Logo} alt="" />
						    
							Life<span className="text-[red]">Drop</span>
						</h2>
						<h3 className="not-italic font-serif text-[20px] leading-10 text-[#D9D9D9]">
							You don’t need superpowers to be a hero, just donate blood.
						</h3>
						<div className="social-icons flex space-x-4 mt-4"> 
							<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
								<FaFacebook className="text-white text-2xl" />
							</a>
							<a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
								<FaGithub className="text-white text-2xl" />
							</a>
							<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
								<FaLinkedin className="text-white text-2xl" />
							</a>
							<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
								<FaInstagram className="text-white text-2xl" />
							</a>
							<a href="mailto:shreyak4821@gmail.com">
								<FaEnvelope className="text-white text-2xl" />
							</a>
						</div>
					</div>
					<div className="footer-col second-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Links
						</h3>
						<ul className="flex flex-col gap-2">
							{exploreLinks.map((link, index) => (
								<li key={index}>
									<NavLink className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]" to={link.link}>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="footer-col third-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Contact
						</h3>
						<ul className="flex flex-col gap-2">
							{contactLinks.map((link, index) => (
								<li key={index}>
									<NavLink className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]" to={link.link}>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="footer-col fourth-col text-center mt-10 border-t-[4px] border-off_white/[.4] pt-6">
					<h3 className="not-italic text-center font-regular text-[18px] leading-[34px] text-[#D9D9D9]">
						&copy;LifeDrop2024,&nbsp;&nbsp; <span className="line-through">Created</span>&nbsp;&nbsp;Crafted by Shreya Kundu 🩸
					</h3>
				</div>
			</div>
		</section>
	);
};

export default FooterComponent;
