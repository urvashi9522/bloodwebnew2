import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Submission2 = () => {
  const navigate = useNavigate();

  const [totalBill, setTotalBill] = useState(0);

  const [orgName, setOrgName] = useState(localStorage.getItem("orgName") || "");
  const [orgEmail, setOrgEmail] = useState(localStorage.getItem("orgEmail") || "");

  const packageDetails = {
    "Standard": { price: 1000, medicalPersons: 30 },
    "Premium": { price: 1500, medicalPersons: 45 },
    "Deluxe": { price: 2000, medicalPersons: 60 },
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(localStorage.getItem("selectedPackage") || "Standard"); 

  useEffect(() => {
    const packagePrice = packageDetails[selectedPackage]?.price || 0;
    setTotalBill(packagePrice); 

    localStorage.setItem("orgName", orgName);
    localStorage.setItem("orgEmail", orgEmail);
    localStorage.setItem("selectedPackage", selectedPackage);
  }, [orgName, orgEmail, selectedPackage]);

  const handlePlaceOrder = () => {
    let message = "";

    if (paymentMethod === "cash") {
      message = "Thank you for choosing LifeDrop. A 50% payment is required before the blood drive, and the remaining amount will be collected by our representative upon completion. If needed, we will reach out to you via email.";
    } else if (paymentMethod === "debit/credit" || paymentMethod === "upi") {
      navigate("/googlepay"); 
      return; 
    }

    if (message) {
      setPaymentMessage(message);
      setOrderPlaced(true);
      setSnackbarVisible(true);
      setTimeout(() => setSnackbarVisible(false), 3000); 
    }
  };

  return (
    <div className="p-6 sm:p-10 mt-10 bg-[#ebece5] rounded-rmd shadow-lg w-full max-w-lg lg:max-w-xl mx-auto" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#ce220a]">
        Choose Package
      </h1>

    <div className="mb-6 bg-white p-4 rounded-rlg" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <p className="text-lg font-semibold mb-2">Select Package According to your Approx Donor Number</p>
        {Object.keys(packageDetails).map((pkg) => (
          <div key={pkg} className="flex items-center mb-3">
            <input
              type="radio"
              id={pkg}
              name="package"
              value={pkg}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="mr-2"
              disabled={orderPlaced}
              checked={selectedPackage === pkg}
            />
            <label htmlFor={pkg} className="text-sm sm:text-lg">
              {pkg}: ₹{packageDetails[pkg].price} up to {packageDetails[pkg].medicalPersons} medical persons
            </label>
          </div>
        ))}
      </div>


      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#ce220a]">
        Your Bill
      </h1>

      <div className="bg-white p-4 sm:p-6 rounded-rmd shadow-md mb-6">
        <div className="flex justify-between text-sm sm:text-lg">
          <p className="font-semibold">Organization Name:</p>
          <p className="text-[#ff0000]">{orgName}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-2">
          <p className="font-semibold">Organization Email:</p>
          <p className="text-[#ff0000]">{orgEmail}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-2">
          <p className="font-semibold">Selected Package:</p>
          <p className="text-[#ff0000]">{selectedPackage}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-4 border-t pt-2">
          <p className="font-bold">Total Bill:</p>
          <p className="font-bold text-[#ff0000]">₹{totalBill}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Select Payment Method</p>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
            disabled={orderPlaced}
            checked={paymentMethod === "cash"}
          />
          <label htmlFor="cash" className="text-sm sm:text-lg">Cash</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="radio"
            id="debit-credit"
            name="payment"
            value="debit/credit"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
            disabled={orderPlaced}
            checked={paymentMethod === "debit/credit"}
          />
          <label htmlFor="debit-credit" className="text-sm sm:text-lg">Debit/Credit Card</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="upi"
            name="payment"
            value="upi"
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
            disabled={orderPlaced}
            checked={paymentMethod === "upi"}
          />
          <label htmlFor="upi" className="text-sm sm:text-lg">UPI</label>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={!paymentMethod || orderPlaced}
        className={`w-full py-3 px-4 font-bold text-white shadow-xl rounded-rmd transition-colors ${
          !paymentMethod || orderPlaced
            ? "bg-[#ce220a] cursor-not-allowed"
            : "bg-[#ce220a] hover:bg-[#ff0000]"
        }`}
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      >
        {orderPlaced ? "Order Placed" : "Place Order"}
      </button>

      {orderPlaced && (
        <div className="mt-6 p-4 bg-[#eaf4a7] rounded-rmd shadow-lg">
          {paymentMessage}
        </div>
      )}

      {snackbarVisible && (
        <div className="fixed top-4 right-4 p-4 bg-[#22991b] text-white rounded-rmd text-sm sm:text-base">
          Your order has been placed successfully!
        </div>
      )}
    </div>
  );
};

export default Submission2;
