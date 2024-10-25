import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo(({ infoData }) => {
  return (
    <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        <div className="room-lsit">
          <ScrollView>
            {infoData.list.map((item) => {
              return (
                <RoomItem itemData={item} itemWidth={"20%"} key={item.id} />
              );
            })}
          </ScrollView>
        </div>
        <SectionFooter name="plus" />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV3;
