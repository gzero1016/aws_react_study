import { css } from "@emotion/react";   //emotion 정의하는 쪽

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #f8f1f2;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 500px;
    height: 700px
`;

export const SContainer = css`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-gap: 0.8em;

    margin: 20px 0px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
`;

/* 파일선택기 숨김 */
export const SFileHidden = css`
    display: none;
`;

export const SInputLabel = css`
    text-align: right;
`;

export const SInput = css`
    text-align: center;
    background-color: #fad0c4;
    color: #555;
    
    padding: 10px;
    border-radius: 50px;
    border: none;
    width: 200px;

    &:focus {
        outline: none;
        border: 2px solid #ff6666; /* 변경할 테두리 색상 설정 */
    }
`;

export const SLabel = css`
    margin-right: 10px;
    color: #999;
`;

export const SButton = css`
    position: absolute;
    top: 85%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 200px;

    background-color: #f8f1f2;
    color: #ff6666;
    border: none;
    font-weight: bold;
    cursor: pointer;

    &:active{
        color: #fad0c4;
    }
`;

export const SMyProfile = css`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(45deg, #ff9a9e, #fad0c4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 36px;
    font-weight: bold;
`;