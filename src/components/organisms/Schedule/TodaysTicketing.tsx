import React from "react";
import NoData from "../../molecules/NoData";
import Section from "../../molecules/Section";

const TodaysTicketing = () => {
  return (
    <Section title="오늘의 티켓팅">
      <NoData text="오늘은 일정이 없네요:)" />
    </Section>
  );
};

export default TodaysTicketing;
