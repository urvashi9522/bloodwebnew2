import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./form-component-styles.scss";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const FormComponent = ({
  fields,
  heading,
  buttonText,
  formData,
  setFormData,
  handleSubmit,
  redirectTo, 
  dynamicMessage, 
}) => {
  const navigate = useNavigate(); 
  const [status, setStatus] = useState("Pending");
  const [errors, setErrors] = useState({});

  const inputStyles = `block w-full flex justify-start items-start rounded-rsm border-0 px-8 py-3 md:px-10 md:py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6`;

  const validateFields = () => {
    let fieldErrors = {};

    fields.forEach((field) => {
      const value = formData[field.name];

      if (field.required && !value) {
        fieldErrors[field.name] = `${field.placeholder || field.name} is required`;
      }

      if (field.name === "age" && value) {
        const age = parseInt(value, 10);
        if (isNaN(age) || age < 18 || age > 56) {
          fieldErrors[field.name] = "Not eligible for blood donation";
        }
      }

      if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          fieldErrors[field.name] = "Invalid email address";
        }
      }

      if (field.name === "phone" && value) {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value)) {
          fieldErrors[field.name] = "Phone number must be 10 digits";
        }
      }

      if (field.type === "number" && value) {
        const numberRegex = /^[0-9]+$/;
        if (!numberRegex.test(value)) {
          fieldErrors[field.name] = "This field must be a number";
        }
      } else if (field.type === "text" && value) {
        const textRegex = /^[a-zA-Z\s]+$/;
        if (!textRegex.test(value)) {
          fieldErrors[field.name] = "This field must contain only text";
        }
      } else if (field.type === "alphanumeric" && value) {
        const alphanumericRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
        if (!alphanumericRegex.test(value)) {
          fieldErrors[field.name] = "This field can include only alphabet, number, or special character.";
        }
      }
    });

    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0; 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      handleSubmit(e);
      setStatus("Submitted");
      navigate(redirectTo); 
    } else {
      setStatus("Pending");
    }
  };

  return (
    <WrapperSection>
      <div
        className={`form-wrapper -mt-[10em] w-full relative p-6 py-10 lg:p-20 lg:pb-10 rounded-rmd z-[25] overflow-hidden`}
      >
        <h3 className="not-italic text-center font-medium text-[16px] sm:text-[25px] leading-[34px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white">
          {heading}!
        </h3>
        {status === "Submitted" ? (
          <p className="text-center text-[#ff0000] text-md font-bold sm:text-base mt-5">
            “Thank you for contacting LifeDrop. We will get back to you within 30 minutes via your given email with all details.!”
          </p>
        ) : (
          <form
            className="contact-form grid grid-cols-1 sm:grid-cols-2 gap-5 w-full relative sm:p-6 py-8 sm:p-10 rounded-rmd z-[25] overflow-hidden"
            onSubmit={handleFormSubmit}
          >
            {fields.map((field, index) => (
              <div key={field.key} className="w-full">
                {field.type === "select" ? (
                  <select
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      })
                    }
                    value={formData[field.name]}
                    name={field.name}
                    id={field.name}
                    className={inputStyles}
                    required={field.required}
                  >
                    <option value="" disabled>{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.name]: e.target.value,
                      })
                    }
                    value={formData[field.name]}
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className={inputStyles}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
                {errors[field.name] && (
                  <p className="text-[#ff0000] text-sm font-bold mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}
            <div className="grid sm:col-span-2 gap-5 w-full">
              <textarea
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                value={formData.message}
                name="message"
                id="message"
                className={`${inputStyles} h-[8em]`}
                rows={10}
                placeholder="Any other information..."
              />
              {errors.message && (
                <p className="border-4 border-white text-[#ff0000] text-sm mt-1">{errors.message}</p>
              )}
            </div>
            {dynamicMessage && (
              <div className="grid sm:col-span-2 gap-5 mb-5 w-full text-center">
                <p className="text-lg text-[#ff0000] font-bold">{dynamicMessage}</p>
              </div>
            )}
            <div className="grid place-items-center sm:col-span-2 gap-5 mb-5 w-full">
              <button
                type="submit"
                name="submit"
                className={`rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm w-fit font-bold cursor-pointer`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        )}
      </div>
    </WrapperSection>
  );
};

export default FormComponent;
