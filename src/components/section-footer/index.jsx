import PropTypes from "prop-types";
import React, { memo } from "react";
import { FootWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";

const SectionFooter = memo(({ name = "" }) => {
    let showMessage =  "显示更多内容"
    if (name) {
        showMessage = `显示更多${name}房源`
    } 
  return (
    <FootWrapper color={name ? "#00848A" : "#000"}>
      <div className="info">
        <span className="text"> {showMessage} </span>
        <IconMoreArrow />
      </div>
    </FootWrapper>
  );
});

SectionFooter.propTypes = {
    name: PropTypes.string
};

export default SectionFooter;
