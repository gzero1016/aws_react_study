/** @jsxImportSource @emotion/react */  // emotion 불러오는쪽
import { css } from "@emotion/react";
import React, { useEffect, useRef, useState } from 'react';
import * as S from './Style.js';    // css파일 분리할때 임포트하는 방법

function Mypage(props) {

    // 기본이미지 설정
    const defaultProfileImgSrc = 
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgFBQkGBxYIBwYGBw8ICQgWIBEiIiAdHx8YHSggGCYlGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADEQAQACAQIDBQYFBQAAAAAAAAABAgMEEgURIiEyQlJxEyMxUVNiQXKBkcEzYWNz0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm960pNrzWta13WtZSa7id8szTBNsOPu7vFYFpqNfp9Pzi991vp4+qyDfjUR/Tw7v8AZdUALWONX59WHHy+26Vp+K4MsxW+7Ba31O7+6gAa74jM4NdqMHKKZLWr9O3VVdaHXU1VeU+7yV72PzegJgAAAAAAAAAAAAAAAAI+vzew0uS8T1bdtfWQVXFtZObJOGk+7xW6tvilXAAAAAA9UvalovSbVtXqraryA0fD9XGqw8521yU6b1/lLZjQ6idNqKX59Pdv6NPE845wAAAAAAAAAAAAAAAq+O35YcdPNfd+y0VHHufPD8u0FQAAAAAAAA0+hvN9HitPx2Mw0vDqzXRYonybgSQAAAAAAAAAAAAAFbxyk209LxH9K/V+qyQeL5JporREbva22flBnwAAAAAAAeqV32rWPFba1VKxStaR8KV2spEzExMTtmrR8Nve+jx2yza1rc+q3yBKAAAAAAAAAAAAAAcNZhjUafJSY7du6vq7gMlMcpmJ+NXxO4pprYM83iPd57bq2/v8kEAAAAAH2Im0xERum3drUHTTYbajPTHX42t1W8sNRWsUrWsfCtdtVbwnQ3wzOXL02tXbXH5YWYAAAAAAAAAAAAAAAAOebHXNjtjvG6L12/lZnNjthy2x3jtpba1Sp43p+da56x216L/wCnAAAAWnBNPFsls1o7MXTT1VbQcHrt0VZ89psCcAAAAAAAAAAAAAAAAAAj8RrFtFlifJuSFfxnNFNN7OJ6s9tv6AoQAAAGh4ReLaKkeS01szyz4LqIplthtPZl6qeoLsAAAAAAAAAAAAAAAAR82s0+Hv5MfPy16rK/U8YtbnXT02/wCTJ/wFjqtTj01N2Se3w4/FZntTqL6nLN7+Lu18sOeS98lpvktbJa3is8gAAAAPtZmtotWds16q2fAF/wAP19NRSKXmtMte9XzJ7JRMxPOJ2ystHxW9OVNRFstfDkr3qguxzw5seeu7FeuSPtdAAAAAAAAAHy1orWbWmtYr3rWecuSmKlr5Lba171lBrtdk1NpiN2PHXu4/N6gmavi0Vmaaatck/Vt3Vbl1ObNMzkyXt9u7pcQAAAAAAAAAAAAHql70tFqWtjmvirZPwcXy05RmrXPHm7tlcA0en4hp8/ZF/ZW+nk6UtkU3R8Qy6a0VtNsuP6dvD6A0I54ctM+OMmO26tnQAAAEDi+onDp9lZ22z9P6fiCu4prJ1OXZSfd4rdP3T80EAAAAAAAAAAAAAAAAAAAS+H6u2my9u62O/fr/AC0UTFqxaJ3RbqrZkl5wXUTfDbFad04O76AsgAFBxrJu1ez8MVIqAIAAAAAAAAAAAAAAAAAAAACXwvN7HWU5z05eiwA0YAP/2Q=="
    
    const profileImgSrc = localStorage.getItem("profileImg");

    const [ profileImg, setProfileImg ] = useState(!!profileImgSrc ? profileImgSrc : defaultProfileImgSrc);

    const profileFileInput = useRef();

    // 로컬 스토리지에서 사용자 정보를 가져온다.
    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    let user = {
        // localStorageUser?.username: localStorageUser에 객체가 존재하면 username 속성을 가져온다.
        // && localStorageUser.username: 논리연산자 && 를 사용하여 각각의 값이 존재할 경우에만 값을 user에 할당 (객체에 값이 없는 속성은 user 객체에 할당안됨)
        // 옵셔널 체이닝(?.) , 논리연산자(&&) 를 사용하여 조건부로 값을 추출하는 방법
        username: localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }

    const handleProfileImgChangeClick = () => {
        // current : 객체 가져옴
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();

        // 함수 정의 (이미지를 바꿔주는것)
        reader.onload = (e) => {
            setProfileImg(e.target.result);
            console.log(profileImg);
        }

        reader.readAsDataURL(e.target.files[0]);    // 이미지경로 읽어옴
    }

    // 입력 값 변경 시
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // 사용자 정보 업데이트
        user = {
            ...user,
            [name]: value
        }
    }

    // 저장 버튼 클릭 시
    const handleSaveClick = () => {
        // 수정된 사용자 정보와 프로필 이미지를 로컬 스토리지에 저장
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("profileImg", profileImg);
        console.log(user);
    }

    return (
        <div css={S.SLayout}>
            <h1 css={S.SMyProfile}>My profile</h1>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} src={profileImg} />
                    <input css={S.SFileHidden}type="file" ref={profileFileInput} onChange={handleProfileImgSelect}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SInputLabel}>
                    <label css={S.SLabel} htmlFor="username">ID </label>
                    <input css={S.SInput} type="text" id='username' name="username" onChange={handleInputChange} defaultValue={user.username}/>
                </div>
                <div css={S.SInputLabel}>
                    <label css={S.SLabel} htmlFor="name">Name </label>
                    <input css={S.SInput} type="text" id='name' name="name" onChange={handleInputChange} defaultValue={user.name}/>
                </div>
                <div css={S.SInputLabel}>
                    <label css={S.SLabel} htmlFor="email">Email </label>
                    <input css={S.SInput} type="text" id='email'name="email" onChange={handleInputChange} defaultValue={user.email}/>
                </div>
                <div>
                    <button css={S.SButton} onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;