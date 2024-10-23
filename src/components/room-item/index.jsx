import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const RoomItem = memo(({ itemData }) => {

    return (
        <ItemWrapper>
            <div className='inner'>
                <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div>
                <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
                <div className="name">{itemData.name}</div>
                <div className="price">{itemData.price}</div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem