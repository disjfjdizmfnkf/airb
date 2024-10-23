import styled from "styled-components";

export const HomeWrapper = styled.div`

.content {
    width: 1032px;
    margin: 0 auto;
}

.good-price {
    margin-top: 30px;

    .room-list {
        display: flex;
        flex-wrap: wrap;
        /* 无论是标准盒子模型还是怪异盒子模型，使用-margin都会影响合盒子的总宽度 */
        margin: 0 8px;
    }
}

`