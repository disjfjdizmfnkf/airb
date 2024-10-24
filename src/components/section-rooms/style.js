import styled from "styled-components";

export const RoomsWrapper = styled.div`
  .room-list {
    display: flex;
    /* 设置自动换行 */
    flex-wrap: wrap;
    /* 无论是标准盒子模型还是怪异盒子模型，使用-margin都会影响合盒子的总宽度 */
    margin: 0 -8px;
  }

`;
