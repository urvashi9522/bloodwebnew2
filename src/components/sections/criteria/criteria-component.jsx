import "./criteria-styles.scss";

import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ListComponent from "../list/list-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const CriteriaComponent = ({
  subheadingText,
  headingText,
  paraText,
  classHint,
}) => {
  return (
    <WrapperSection>
      <div
        className={`${classHint} wrapper shreya flex flex-col justify-center items-start w-full relative p-6 py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
        style={{boxShadow:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}}
      >
        <GroupedHeadingComponent
          subheadingText={subheadingText}
          headingText={headingText}
          mode="light"
        />
        {paraText.map((itemText, index) => (
          <ListComponent key={index} itemText={itemText} />
        ))}
      </div>
    </WrapperSection>
  );
};

export default CriteriaComponent;
