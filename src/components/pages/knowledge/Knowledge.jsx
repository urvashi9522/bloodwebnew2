import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import FormComponent from "../../sections/form/form-component";
import ContactDetailsComponent from "../../sections/details/details-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import BloodLoss from "../../sections/blood-loss/blood-loss";
import ContactPage from "../../sections/contact/contact-page";
import Axios from "axios";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const Knowledge = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		reason: "",
		message: "",
	});

    const HomePageDetails = {

		eligiblity_criteria: {
			subheadingText: "Are You Set to Help?",
			headingText: "Criteria for Donors",
			classHint: "side-col-image eligibility-criteria",
            paraText: [
                `Weigh at least 50 kg.`,
                `Age should be between 18 and 50 years.`,
                `Have normal temperature, pulse, and blood pressure.`,
                `No skin diseases, punctures, or scars.`,
                `Hemoglobin must be above 12.5 g/dL.`,
                `No history of respiratory or transmissible diseases.`,
            ],
			// imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: false,
		},
        blood_loss1: {
            subheadingText: "Understanding Blood Groups",
            headingText: "Know Your Blood Type",
            classHint: "side-col-image eligibility-criteria2",
            paraText: [
                `Blood is a vital fluid in the body that transports oxygen, nutrients, and hormones to cells . It plays a crucial role in immune defense.`,
                `There are four main blood groups: A, B, AB, and O, each of which can be Rh-positive (+) or Rh-negative (-).`,
                `Blood Group A: Has A antigens on red cells and B antibodies in the plasma. Can donate to A and AB groups.`,
                `Blood Group B: Has B antigens on red cells and A antibodies in the plasma. Can donate to B and AB groups.`,
                `Blood Group AB: Has both A and B antigens, but no antibodies. Can receive from all blood types and is known as the "Universal Recipient".`,
                `Blood Group O: Has no A or B antigens but has both A and B antibodies. It is the "Universal Donor", meaning it can donate to all blood types.`,
                `Rh Factor: The Rh factor (positive or negative) is an additional component that can impact blood compatibility in transfusions.`,
            ],
            // imageUrl: "../../../assets/images/blood-groups.jpg", // Optional: You can add an image URL here if needed.
            buttonText: "Learn More",
            buttonLink: "/blood-group-info",
            buttonHave: false,
        },

        blood_loss: {

                    subheadingText: "Feeling Anxious About Donating Blood?",
                    headingText: " Let Us Ease Your Fears!",
                    classHint: "side-col-image eligibility-criteria",
                    paraText: [
                        `Donating blood is safe and does not harm your health.`,
                        `You can help others without experiencing significant blood loss.`,
                        `Blood donation is a simple process that only takes about an hour.`,
                        `Your body replenishes the donated blood quickly, usually within a few weeks.`,
                        `Every donation can save up to three lives.`,
                        `Join us in making a difference—your donation can provide hope!`,
                    ],
                    imageUrl: "../../../assets/images/blood-donation(1).jpg",
                    buttonText: "Donate Now",
                    buttonLink: "/donate-blood",
                    buttonHave: false,
		},
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-need-help", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			reason: formData.reason,
			message: formData.message,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "need-help");

		setFormData({
			name: "",
			email: "",
			phone: "",
			reason: "",
			message: "",
		});
	};

	const ContactPageDetails = {
		hero: {
			subheadingText: "Need Guidance on Donating? ",
			headingText: " Let Us Show You the Way!",
			classHint: "contact-page-hero",
		},
	};


	return (
		<>
		  <div>
			<HeaderComponent />
			<HeroComponent {...ContactPageDetails.hero} />
			<CriteriaComponent {...HomePageDetails.blood_loss1} />
			<CriteriaComponent {...HomePageDetails.eligiblity_criteria} />
            <BloodLoss {...HomePageDetails.blood_loss} />
            <h2 className="mt-[5rem] text-center text-[#93150c] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6">
				You Have More Doubts?
			</h2>
			<ContactPage />
			<BeforeFooterCTA />
			<FooterComponent />
			</div>
		</>
	);
};

export default Knowledge;
