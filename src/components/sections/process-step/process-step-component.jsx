import ParaComponent from "../para/para-component";

const ProcessStepComponent = ({
  stepNumber,
  stepName,
  stepDescription,
  stepUrl,
}) => {
  return (
    <a
      href={stepUrl}
      className="process-step p-4 sm:p-6 lg:p-8 pr-8 sm:pr-12 lg:pr-16 w-full"
    >
      <div className="step-number-wrapper w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-dark_red rounded-full flex justify-center items-center mb-4 mt-3 sm:mb-6">
        <span className="step-number font-bold text-[16px] sm:text-[20px] lg:text-[22px] text-off_white">
          {stepNumber}
        </span>
      </div>
      <div
        className="step-content-wrapper bg-[#fce6be] rounded-rlg p-5 sm:p-6 lg:p-8 w-full h-auto sm:h-48 lg:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <h3 className="step-name font-bold text-[20px] sm:text-[24px] lg:text-[28px] leading-[30px] sm:leading-[35px] lg:leading-[42px] capitalize text-dark">
          {stepName}
        </h3>
        <ParaComponent innerText={stepDescription} size="large" />
      </div>
    </a>
  );
};

export default ProcessStepComponent;
