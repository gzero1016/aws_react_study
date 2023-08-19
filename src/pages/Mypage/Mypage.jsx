/** @jsxImportSource @emotion/react */  // emotion 불러오는쪽
import React from 'react';
import * as S from './Style.js';    // css파일 분리할때 임포트하는 방법

function Mypage(props) {
    return (
        <div css={S.SLayout}>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <input type="file" />
            </div>
            <div>
                <div>
                    <label htmlFor="username">사용자명</label>
                    <input type="text" id='username'/>
                </div>
                <div>
                    <label htmlFor="name">이름 </label>
                    <input type="text" id='name'/>
                </div>
                <div>
                    <label htmlFor="email">이메일 </label>
                    <input type="text" id='email'/>
                </div>
                <div>
                    <button>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;