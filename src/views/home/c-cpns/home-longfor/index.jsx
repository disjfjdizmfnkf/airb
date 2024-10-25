import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo(({ infoData }) => {
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      {/* jsx中的插槽 props.children ，直接将插入的内容写在组件中的{}中 */}
      <ScrollView>
        {
          <div className="longfor-list">
            {infoData.list.map((item) => {
              return <LongforItem itemData={item} key={item.city} />;
            })}
          </div>
        }
      </ScrollView>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object,
};

export default HomeLongfor;
