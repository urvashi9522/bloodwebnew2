const ParaComponent = ({ innerText, size }) => {
	return (
	  <p
		className={`step-description font-medium ${
		  size === "large"
			? "text-[16px] sm:text-[18px] lg:text-[20px]"
			: "text-[14px] sm:text-[16px] lg:text-[18px]"
		} leading-6 sm:leading-7 lg:leading-8 text-light`}
	  >
		{innerText}
	  </p>
	);
  };
  
  export default ParaComponent;
  