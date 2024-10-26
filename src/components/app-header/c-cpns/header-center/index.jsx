import React, { memo } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源</div>
        <div className="icon">
          <IconSearchBar/>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter