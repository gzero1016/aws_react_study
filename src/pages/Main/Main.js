import React, { useState } from 'react';
import TodoAddInput from '../../components/TodoAddInput/TodoAddInput';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

function Main(props) {
    let todoInputValue = null;
    // useState를 사용한 변수를 확인 후 재랜더링 해줌 (상태)
    let [ todoContent, setTodoContent ] = useState("");
    // 배열생성
    const [ todoContentArray, setTodoContentArray ] = useState([]);
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });

    // 이벤트가 일어나는 타겟의 값을 변수에 바꿔서 담는다.
    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleUserInfoChange = (e) => {
        const {name, value} = e.target;     //이벤트가 발생한 객체가 e.target
        console.log(e.target);
        // 백쿼트 문자열
        console.log(`name: ${name}, value: ${value}`);

        setUser({
            ...user,    // 기존의 user를 다들고오는것
            [name]: value
        });
    }

    const handleAddClick = () => {
        // 리엑트는 querySelector를 안쓰기 위해서 사용하는 라이브러리이다.
        // const todoInput = document.querySelector(".todo-input")
        // alert(todoInput.value);
        // setTodoContent(todoInputValue);
        
        // 배열안에 집어넣는다.
        // todoContentArray.push(todoInputValue);

        // 위코드랑 동일한데 새로운 배열을 만들어서 푸시하는 방식 (기존값에 새로운값을 추가하는 방식)
        setTodoContentArray([...todoContentArray, todoInputValue]); //스프래드문법
        console.log(todoContentArray);
    }

    // 랜더링은 딱 1번만 실행됨
    return (
        <div>
            <div>
                <h1>사용자이름: {user.username}</h1>    {/* 상태가변하면서 랜더링이 일어남 */}
                <h1>비밀번호: {user.password}</h1>
                <UsernameInput onChange={handleUserInfoChange} />
                <PasswordInput onChange={handleUserInfoChange} />

                <TodoAddInput onChange={handleTodoInputChange} />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <ul>
                {/* todoContent 가 ture이면 출력! (표현식안에서 jsx를 사용하기위해 {} 를 또 사용한다.) */}
                {/* {!!todoContent && (<li>{todoContent}</li>)} */}
                
                {/* 배열에서 하나씩 꺼내서 li로 뿌리는작업 */}
                {todoContentArray.map(todoContent => {
                    return (<li>{todoContent}</li>);
                })}
            </ul>
        </div>
    );
}

export default Main;