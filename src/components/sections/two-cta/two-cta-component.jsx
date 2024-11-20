import "./two-cta-styles.scss";

import WrapperSection from "../wrapper-section/wrapper-section-component";
import ButtonComponent from "../button/button-component";

const TwoCtaComponent = () => {
	const ctaDetails = [
		{
			key: "donate-blood",
			ctaClass: "first-cta-col",
			subheading: "Be a lifesaver today!",
			heading: "Give blood at LifeDrop",
			btnText: "Donate blood",
			ctaLink: "/donate-blood",
		},
		{
			key: "request-blood",
			ctaClass: "second-cta-col",
			subheading: "Critical demand for blood!",
			heading: "Blood donors needed urgently",
			btnText: "Appeal for blood",
			ctaLink: "/need-blood",
		},
	];

	return (
		<WrapperSection>
			<div className="cta-content-wrapper grid place-items-start sm:grid-cols-[1fr_1fr] gap-[20px] w-full">
				{ctaDetails.map((ctaDetail) => (
					<a
						href={ctaDetail.ctaLink}
						key={ctaDetail.key}
						className={`cta-col sm:before:transition rounded-rmd overflow-hidden w-full relative z-[25] pt-[150px] pb-[30px] sm:pb-[50px] px-[30px] sm:px-[50px] ${ctaDetail.ctaClass}`}
					    style={{boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}
					>
						<div className="cta-col-content relative z-50">
							<p className="cta-subheading not-italic font-medium text-sm sm:text-md leading-normal tracking-[0.2em] uppercase text-white">
								{ctaDetail.subheading}
							</p>
							<h2 className="cta-heading not-italic text-white font-semibold text-[30px] sm:text-[40px] leading-tight capitalize ">
								{ctaDetail.heading}
							</h2>

							<ButtonComponent
								buttonText={ctaDetail.btnText}
								buttonLink={ctaDetail.ctaLink}
								buttonType={"line"}
							/>
						</div>
					</a>
				))}
			</div>
		</WrapperSection>
	);
};

export default TwoCtaComponent;
