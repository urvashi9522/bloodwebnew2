import { useState } from "react";
import { FaRegCopy } from 'react-icons/fa';
import FormComponent from "../../sections/form/form-component";
import newUsersInsertRequest from "../../utility-functions/new-users-insert-request";
import Axios from "axios";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        message: "",
    });

    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [copySuccess, setCopySuccess] = useState("");  

    const phoneNumber = "(+91) 9748054823";  

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

    // Fields for the form
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
            placeholder: "Phone",
            required: true,
        },
        {
            key: "reason",
            name: "reason",
            type: "text",
            placeholder: "Reason",
            required: false,
        },
    ];

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
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="mt-[10rem]">
                <FormComponent
                    fields={fields}
                    heading={"We're here to help You"}
                    buttonText={"Send Message"}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />

                <div className="call-now-container flex justify-center items-center mb-8 -mt-4">
                    <button
                        className="w-32 call-now-button bg-[#ff0000] p-2 text-white font-bold rounded-rlg"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Call Now
                    </button>
                </div>

                {isModalOpen && (
                    <div className="z-50 modal-overlay mt-[-10rem] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOutsideClick}>
                        <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between items-center">
                                <h2 className="text-[#ff0000] font-bold text-lg">Contact Us :-</h2>
                                <button className="close-button text-[#ff0000] font-bold text-2xl" onClick={() => setIsModalOpen(false)}>
                                    &times;
                                </button>
                            </div>
                            <div className="phone-row mt-4 flex justify-center items-center bg-[#f1eeed] p-4 rounded-rlg">
                                <span>{phoneNumber}</span>
                                <button
                                    onClick={copyToClipboard}
                                    className="copy-button ml-4 h-8 w-8 text-white bg-[#ff0000] flex justify-center items-center rounded-full"
                                >
                                    <FaRegCopy />
                                </button>
                            </div>
                            {copySuccess && (
                                <p className="copy-success flex justify-center items-center text-[#17a261] font-bold mt-4">
                                    {copySuccess}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContactPage;
