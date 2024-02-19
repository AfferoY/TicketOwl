import React from "react";
import NoData from "../../molecules/NoData";
import Section from "../../molecules/Section";
import TodaysCard1 from "../../molecules/Schedule/TodaysCard1";
import { DATA_TODAY } from "../../../../public/dummyDatas/today";
import { FlatList, View } from "react-native";
import { spacing } from "../../../constants/spacing";
import Margin from "../../atoms/Margin";

const TodaysTicketing = () => {
  return (
    <Section title="오늘의 티켓팅" noPaddingVertical>
      <Margin margin={spacing.offset} />
      {DATA_TODAY.length === 0 ? (
        <NoData text="오늘은 일정이 없네요:)" />
      ) : (
        DATA_TODAY.map((data) => (
          <TodaysCard1 key={data.id} onPress={() => {}} data={data} />
        ))
      )}
    </Section>
  );
};

export default TodaysTicketing;
