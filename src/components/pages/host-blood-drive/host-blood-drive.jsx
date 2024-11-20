import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import FormComponent from "../../sections/form/form-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import Axios from "axios";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const HostBloodDrivePage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		institute: "",
		designation: "",
		city: "",
		zipcode: "",
		donor_count: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-host-blood-drive", {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			institute: formData.institute,
			designation: formData.designation,
			city: formData.city,
			zipcode: formData.zipcode,
			donor_count: formData.donor_count,
			message: formData.message,
		})
			.then((response) => {
				console.log("success");
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		newUsersInsertRequest(formData, "host-blood-drive");

		localStorage.setItem("orgName", formData.institute);
		localStorage.setItem("orgEmail", formData.email);
		localStorage.setItem("donorCount", formData.donor_count);
		
		setFormData({
			name: "",
			email: "",
			phone: "",
			institute: "",
			designation: "",
			city: "",
			zipcode: "",
			donor_count: "",
			message: "",
		});
	};

	const HostBloodDrivePageDetails = {
		quote: {
			classHint: "quote host-drive-quote",
			quoteText: `“By choosing to host a blood drive with us, you have the power to bring joy to someone's life today, tomorrow, and for years ahead. Together, we can create a lasting impact!”`
		},
		benefits_host_drive: {
			subheadingText: "Become a Hero",
			headingText: "Advantages of Hosting a Blood Drive",
			classHint: "side-col-image benefits-host-drive",
			paraText: `Hosting a blood drive is an excellent way to contribute to your community and save lives. 
			By offering a convenient location for individuals to donate, you help ensure a consistent supply of blood for those in need. 
			Blood drives also serve as a fantastic opportunity for team building and community engagement, enhancing morale and involvement among employees or group members.`,
			buttonText: "Host Now",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},
		host_provide: {
			subheadingText: "What the Host Provides",
			headingText: "Host Responsibilities",
			classHint: "tips-for-managing-blood-loss",
			paraText: [
				"Location. — A large open room with enough space to ensure donor privacy.",
				"Volunteers. — For recruiting, scheduling, and supporting donors.",
				"Donors. — You'll need to recruit and schedule donors for your drive."
			],
			buttonHave: false,
		},
		we_provide: {
			subheadingText: "What the LifeDrop Provides",
			headingText: "Our Responsibilities",
			classHint: "tips-for-managing-blood-loss",
			paraText: [
				"Planning Assistance — Your Red Cross representative will work with you to plan and organize the blood drive.",
				"Recruitment Tools — We’ll help you determine how many donors you need and how to recruit them, including an online scheduling tools for your donors.",
				"Equipment & Supplies — We’ll bring everything we need to your location, set it up and take it down at the end, including snacks and drinks.",
				"Trained Staff — Our staff will confidentially screen donors and collect donations, safely and professionally.",
			],
			buttonHave: false,
		},
		hosting_blood_drive: {
			subheadingText: "",
			headingText: "Organizing the Blood Drive",
			classHint: "side-col-image hosting-blood-drive",
			paraText: `On the day of the blood drive, it’s crucial to ensure that everything runs seamlessly and that donors have a positive experience. 
			Ensure you have sufficient volunteers to assist with registration, refreshments, and donor follow-up. 
			Create a comfortable and welcoming atmosphere for donors, and make sure all equipment is properly sanitized and maintained.`,
			buttonText: "Host Now",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},
		hero: {
			subheadingText: "Join us to save lives",
			headingText: "Host a Blood Drive to save lives with us",
			classHint: "host-blood-drive-page-hero",
		},
		stepsText: {
			subheadingText: "Hosting Tips",
			headingText: "How to Promote Your Blood Drive ?",
		},
	};

	const stepDetails = [
		{
			key: "promote-widely",
			stepNumber: "A",
			stepName: "Spread the Word",
			stepDescription:
				"Leverage social media, flyers, and email campaigns to maximize outreach.",
		},
		{
			key: "emphasize-benefits",
			stepNumber: "B",
			stepName: "Highlight the Impact",
			stepDescription: "Showcase the life-saving difference donors can make.",
		},
		{
			key: "varity-of-channels",
			stepNumber: "C",
			stepName: "Diversify Your Reach",
			stepDescription:
				"Utilize a range of platforms to connect with potential donors effectively.",
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
			type: "tel",
			placeholder: "Phone Number",
			required: true,
		},
		{
			key: "institute",
			name: "institute",
			type: "text",
			placeholder: "Organization Name",
			required: true,
		},
		{
			key: "designation",
			name: "designation",
			type: "text",
			placeholder: "Your Designation",
			required: false,
		},
		{
			key: "city",
			name: "city",
			type: "text",
			placeholder: "City of the organization",
			required: true,
		},
		{
			key: "zipcode",
			name: "zipcode",
			type: "number",
			placeholder: "6 digit pin code...",
			required: true,
		},
		{
			key: "donor_count",
			name: "donor_count",
			type: "number",
			placeholder: "Approx Number of Donors",
			required: true,
		},
	];

	return (
		<>
			<HeaderComponent />
			<HeroComponent {...HostBloodDrivePageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Host a Blood Drive"}
				buttonText={"Schedule Host"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
				redirectTo="/submission2"
			/>

			<ThreeStepProcessComponent
				stepsText={HostBloodDrivePageDetails.stepsText}
				stepDetails={stepDetails}
			/>

			<CriteriaComponent {...HostBloodDrivePageDetails.host_provide} />
			<CriteriaComponent {...HostBloodDrivePageDetails.we_provide} />


			<SideBySideComponent {...HostBloodDrivePageDetails.benefits_host_drive} />
			<QuoteComponent {...HostBloodDrivePageDetails.quote} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default HostBloodDrivePage;
