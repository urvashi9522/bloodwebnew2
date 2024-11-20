import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import FormComponent from "../../sections/form/form-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

import Axios from "axios";

const DonateBloodPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		bloodType: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();


		console.log("success");

		Axios.post("http://localhost:3001/create-donate-blood", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			bloodType: formData.bloodType,
			message: formData.message,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "donate-blood");

		setFormData({
			name: "",
			email: "",
			phone: "",
			bloodType: "",
			message: "",
		});
	};

	const DonateBloodPageDetails = {
		quote: {
			classHint: "quote",
			quoteText: `“Your financial contributions offer sustenance, while donating blood grants the precious gift of life. Become a part of this noble mission today!”`,
		},
		why_donate_blood: {
			subheadingText: "Donate blood today",
			headingText: "Why should you donate blood?",
			classHint: "side-col-image why-donate-blood",
			paraText: `Donating blood is a selfless act that has the power to save lives. Here are a few reasons why you should consider donating blood:
			\n― You could help save up to three lives with just one donation.
			― Blood is always needed in emergency situations, such as natural disasters and accidents.
			― Blood is needed for patients undergoing surgeries, cancer treatment, and other medical procedures.
			― Blood cannot be manufactured, which means that the only source of blood is through donations from volunteers.
			― Donating blood can also have health benefits for the donor, such as reducing the risk of heart disease and cancer.`,
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
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
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: false,
		},
		hero: {
			subheadingText: "Free Blood Donation Camp",
			headingText: "Donate Blood With Us!",
			classHint: "donate-blood-page-hero",
		},
		stepsText: {
			subheadingText: "Donate to the Needy One with Us",
			headingText: "Step-by-Step Process of Blood-Donation",
		},
	};

	const stepDetails = [
		{
			key: "eligibility",
			stepNumber: "A",
			stepName: "Check Eligibility",
			stepDescription: 
				"Ensure you meet the eligibility criteria, including age, weight, blood group and health status.",
		},
		{
			key: "appointment",
			stepNumber: "B",
			stepName: "Schedule an Appointment",
			stepDescription: 
				"Book your slot at a nearby blood bank or during a blood drive.",
		},
		{
			key: "donation",
			stepNumber: "C",
			stepName: "Donate Blood",
			stepDescription: 
				"Attend your appointment, complete a questionnaire, and donate. The whole process takes about 10-15 minutes.",
		},
	];
	

	const fields = [
		{
			key: "name",
			name: "name",
			type: "text",
			placeholder: "Name",
			required: true,
		},
		{
			key: "email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
		},
		{
			key: "phone",
			name: "phone",
			type: "number",
			placeholder: "Phone",
			required: true,
		},
		{
			key: "bloodType",
			name: "bloodType",
			type: "alphaneumeric",
			placeholder: "Blood Type",
			required: true,
		},
		{
			key: "age",
			name: "age",
			type: "number",
			placeholder: "Age",
			required: true,
		},
		
		{
			key: "address",
			name: "address",
			type: "alphaneumeric",
			placeholder: "Your address in Details...",
			required: true,
		},
	];

	return (
		<>
			<HeaderComponent />

			<HeroComponent {...DonateBloodPageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Schedule Your Appointment"}
				buttonText={"Schedule Appointment"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
				redirectTo="" 
			/>

			<ThreeStepProcessComponent
				stepsText={DonateBloodPageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<CriteriaComponent
				{...DonateBloodPageDetails.eligiblity_criteria}
			/>
			<SideBySideComponent {...DonateBloodPageDetails.why_donate_blood} />
			<QuoteComponent {...DonateBloodPageDetails.quote} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default DonateBloodPage;
