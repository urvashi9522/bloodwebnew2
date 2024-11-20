import { useState } from "react";
import { FaRegCopy } from 'react-icons/fa';
import HeroComponent from "../../sections/hero/hero-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import FormComponent from "../../sections/form/form-component";
import SearchBloodStockComponent from "../../sections/search-blood-stock/search-blood-stock-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import Axios from "axios";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";

const Modal = ({ closeModal }) => {
	const phoneNumber = "(+91) 9748054823";
	const [copySuccess, setCopySuccess] = useState("");

	const copyToClipboard = () => {
		navigator.clipboard.writeText(phoneNumber).then(
			() => {
				setCopySuccess("Copied!");
				setTimeout(() => setCopySuccess(""), 2000);
			},
			() => {
				setCopySuccess("Failed to copy!");
			}
		);
	};

	const handleOutsideClick = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			closeModal();
		}
	};

	return (
		<div className="modal-overlay mt-4" onClick={handleOutsideClick}>
			<div className="modal-content">
				<div className="flex justify-between items-center">
					<h2 className="text-[#ff0000] font-bold text-lg">Contact Us :-</h2>
					<button className="close-button text-[#ff0000] font-bold text-2xl rounded-rlg" onClick={closeModal}>
						&times;
					</button>
				</div>
				<div className="phone-row mt-4 flex justify-center items-center bg-[#f1eeed] p-4 rounded-rlg">
					<span>{phoneNumber}</span>
					<button onClick={copyToClipboard} className="copy-button ml-4 h-8 w-8 text-white bg-[#ff0000] flex justify-center items-center rounded-full">
						<FaRegCopy />
					</button>
				</div>
				{copySuccess && <p className="copy-success flex justify-center items-center text-[#17a261] font-bold">{copySuccess}</p>}
			</div>
		</div>
	);
};

const NeedBloodPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		bloodType: "",
		message: "",
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		Axios.post("http://localhost:3001/create-need-blood", {
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

		newUsersInsertRequest(formData, "need-blood");

		localStorage.setItem("name", formData.name);
		localStorage.setItem("email", formData.email);
		localStorage.setItem("bloodType", formData.bloodType);
		localStorage.setItem("pouches", formData.pouchnumber);


		setFormData({
			name: "",
			email: "",
			phone: "",
			bloodType: "",
			message: "",
		});
	};

	const NeedBloodPageDetails = {
		quote: {
			classHint: "quote need-blood-quote",
			quoteText: "In urgent need of blood?\n Request a callback and we'll assist you immediately!",
			buttonHave: false,
		},
		tips_for_managing_blood_loss: {
			subheadingText: "Essential Guidance",
			headingText: "Managing Blood Loss Effectively",
			classHint: "tips-for-managing-blood-loss",
			paraText: [
				"It's important to stay calm and avoid engaging in any intense activities.",
				"If possible, raise the affected area to help minimize blood flow.",
				"Apply firm pressure directly on the wound to help control the bleeding.",
				"Rehydrate yourself with fluids such as water or sports drinks to replace lost fluids.",
				"Incorporate iron-rich and protein-packed foods, like spinach, beans, and lean meats, to restore essential nutrients.",
			],
			buttonHave: false,
		},
		hero: {
			subheadingText: "Need blood? First check the blood availability 👇",
			headingText: "Your blood needs are our priority.",
			classHint: "need-blood-page-hero",
		},
		bloodStock: {
			subheadingText: "",
			headingText: "Search For Available Blood",
			classHint: "search-blood-stock",
		},
	};

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
			key: "address",
			name: "address",
			type: "alphaneumeric",
			placeholder: "Address",
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
			key: "pouchnumber",
			name: "pouchnumber",
			type: "number",
			placeholder: "Number of blood pouches needed",
			required: true,
		},
	];

	return (
		<>
			<HeaderComponent />
			<HeroComponent {...NeedBloodPageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Appeal for emergency blood"}
				buttonText={"Appeal blood"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
				redirectTo="/submission"
				dynamicMessage="Check the blood availability from the below (Search For Available Blood) section 👇 before making a request. We are not responsible for shortages of blood pouch or we don't refunds after payment."
			/>
			<SearchBloodStockComponent {...NeedBloodPageDetails.bloodStock} />
			<QuoteComponent {...NeedBloodPageDetails.quote} />
			<div className="call-now-container flex justify-center items-center ">
				<button className="w-32 call-now-button bg-[#ff0000] p-2 text-white font-bold rounded-rlg" onClick={() => setIsModalOpen(true)}>
					Call Now
				</button>
			</div>
			{isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
			<CriteriaComponent {...NeedBloodPageDetails.tips_for_managing_blood_loss} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default NeedBloodPage;
