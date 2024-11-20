import "./before-footer-cta-styles.scss";
import ButtonComponent from "../button/button-component";
import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";

const BeforeFooterCTA = ({ subheadingText, headingText, classHint }) => {
	return (
		<section className="before-footer-cta two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 py-[80px]">
			<div className="two-cta-container relative w-[min(100%_-_15px,1250px)] flex flex-row justify-center mx-auto my-0 p-2.5">
				<div
					className={` flex flex-col justify-center items-center w-full relative z-[25] overflow-hidden`}
				>
					<GroupedHeadingComponent
						subheadingText={"A little of you, a lot for them !"}
						headingText={"Gift Life, Donate Blood."}
						mode="light"
						position="center"
						boxWidth="large"
					/>
					<ButtonComponent
						buttonText={"Donate Blood"}
						buttonLink={"/donate-blood"}
                        buttonType="line"
					/>
				</div>
			</div>
		</section>
	);
};

export default BeforeFooterCTA;
