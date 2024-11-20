import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ProcessStepComponent from "../process-step/process-step-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const ThreeStepProcessComponent = ({ stepDetails, stepsText }) => {
  return (
    <WrapperSection>
      <div className="wrapper w-full p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 2xl:p-24">
        <GroupedHeadingComponent
          subheadingText={stepsText.subheadingText}
          headingText={stepsText.headingText}
        />
        <div className="process-steps-wrapper mt-5 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {stepDetails.map((stepDetail, index) => (
            <ProcessStepComponent key={index} {...stepDetail} />
          ))}
        </div>
      </div>
    </WrapperSection>
  );
};

export default ThreeStepProcessComponent;
