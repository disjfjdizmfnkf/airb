import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "../room-item";

const SectionRomms = memo(({ roomList = [], itemWidth = "25%" }) => {
  return (
    <RoomsWrapper >
      <ul className="room-list">
        {
          roomList?.slice(0, 8).map((item) => {
            return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>;
          })
        }
      </ul>
    </RoomsWrapper>
  );
});

SectionRomms.propTypes = {
  roomLists: PropTypes.array,
};

export default SectionRomms;
