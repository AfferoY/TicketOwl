import React from "react";
import NoData from "../../molecules/NoData";
import Section from "../../molecules/Section";
import UpcomingCard from "../../molecules/Schedule/UpcomingCard";
import { FlatList, View } from "react-native";
import { DATA_UPCOMING } from "../../../../public/dummyDatas/upcoming";
import { spacing } from "../../../constants/spacing";

const UpcomingTicketing = () => {
  return (
    <Section
      title="다가오는 티켓팅"
      noPaddingVertical={true}
      noPaddingHorizontal={true}
    >
      {DATA_UPCOMING.length === 0 ? (
        <View style={{ paddingTop: spacing.offset }}>
          <NoData text="다가오는 일정이 없네요 :)" />
        </View>
      ) : (
        <FlatList
          data={DATA_UPCOMING}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: spacing.offset,
            paddingVertical: spacing.offset,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => <UpcomingCard data={item} />}
        />
      )}
    </Section>
  );
};

export default UpcomingTicketing;
