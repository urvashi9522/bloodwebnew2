import HeroComponent from "../../sections/hero/hero-component";
import TwoCtaComponent from "../../sections/two-cta/two-cta-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import ContactPage from "../../sections/contact/contact-page";


const HomePage = () => {
	const HomePageDetails = {

		quote: {
			classHint: "quote",
			quoteText: `“Donating blood is a simple act that can make a big difference in the lives of others”`,
		},
		quote1: {
			classHint: "quote",
			quoteText: `“Your blood donation is a gift that gives life, not just to strangers, but to those we love. It’s a reminder that every drop counts, and you never know when you might need someone else to step up for you.”`,
		},
		donate_blood: {
			subheadingText: "Transform Lives Today",
			headingText: "Contribute Blood with LifeDrop",
			classHint: "side-col-image donate-blood-with-lifedrop card-front card-back",
			paraText:
				"We strive to build a supportive community of donors who change lives for the better. Ensuring the safety and comfort of our donors and patients is our top priority, and we deliver outstanding care to facilitate an effortless donation experience. Unite with us in our mission to save lives.",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		why_donate_blood: {
			subheadingText: "Join the cause today",
			headingText: "The Importance of Blood Donation",
			classHint: "side-col-image why-donate-blood",
			paraText: `Donating blood is a noble act that significantly impacts lives. Here are a few key reasons to donate:
			\n― One donation can save up to three lives.
			― Blood is always needed in emergencies like accidents and disasters.
			― Patients in surgeries and treatments rely on donations.
			― Blood cannot be manufactured; it comes solely from donors.
			― Donating may also lower the risk of heart disease and certain cancers.
			\nBy giving blood, you not only save lives but also support your community.`,
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		hero: {
			subheadingText: "Give the gift of life",
			headingText: "Your Blood Can Make A Difference",
			classHint: "home-page-hero",
		},
	};


	return (
		<>
			<HeaderComponent />

			<HeroComponent {...HomePageDetails.hero} />
			<h2 className="mt-[5rem] text-center text-[#93150c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
				Our Services
			</h2>
			<TwoCtaComponent />
			<QuoteComponent {...HomePageDetails.quote1} />
			<SideBySideComponent {...HomePageDetails.donate_blood} />
			<QuoteComponent {...HomePageDetails.quote} />
			<SideBySideComponent {...HomePageDetails.why_donate_blood} />
			<h2 className="text-center text-[#93150c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6">
				You Have More Doubts?
			</h2>
			<ContactPage />
			<BeforeFooterCTA className="border-4 border-red-500"/>
			<FooterComponent />
		</>
	);
};

export default HomePage;
