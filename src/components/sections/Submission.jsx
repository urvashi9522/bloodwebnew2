import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Submission = () => {
  const navigate = useNavigate();

  const [bloodType, setBloodType] = useState(localStorage.getItem("bloodType") || "A+");
  const [pouches, setPouches] = useState(parseInt(localStorage.getItem("pouches"), 10) || 2);
  const [totalBill, setTotalBill] = useState(0);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");


  const bloodPrices = {
    "A+": 500,
    "B+": 600,
    "O+": 700,
    "AB+": 800,
    "A-": 550,
    "B-": 650,
    "O-": 750,
    "AB-": 850,
  };

  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    setTotalBill(pouches * bloodPrices[bloodType]);
    localStorage.setItem("bloodType", bloodType);
    localStorage.setItem("pouches", pouches);
    localStorage.setItem("name", name); 
    localStorage.setItem("email", email);
  }, [bloodType, pouches, name, email]);

  const handlePlaceOrder = () => {
    let message = "";

    if (paymentMethod === "cash") {
      message = "Thank you for contacting LifeDrop. You have to pay the bill in our blood bank while collecting the blood pouches. For any need, we will contact you via email.";
    } else if (paymentMethod === "debit/credit" || paymentMethod === "upi") {
      navigate("/hulu"); 
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
        Your Order
      </h1>

      <div className="bg-white p-4 sm:p-6 rounded-rmd shadow-md mb-6">
        <div className="flex justify-between text-sm sm:text-lg">
          <p className="font-semibold">User Name:</p>
          <p>{name}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-2">
          <p className="font-semibold">Email:</p>
          <p>{email}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-2">
          <p className="font-semibold">Blood Type:</p>
          <p>{bloodType}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-2">
          <p className="font-semibold">Pouches:</p>
          <p>{pouches}</p>
        </div>
        <div className="flex justify-between text-sm sm:text-lg mt-4 border-t pt-2">
          <p className="font-bold">Total Bill:</p>
          <p className="font-bold">₹{totalBill}</p>
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
        style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
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

export default Submission;
