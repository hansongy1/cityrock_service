// // Register.js
import { useState, useRef } from 'react';
import Button from '../pages/Button';
import server from '../pages/Server';
import '../styles/Register.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function Register() {
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const phonenumderRef = useRef('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 비밀번호 확인 표시 여부 상태
  const [passwordMatch, setPasswordMatch] = useState(false); // 비밀번호와 비밀번호 확인 값이 일치하는지 여부를 확인하는 상태 추가

  const handleRegister = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const phonenumder = phonenumderRef.current.value;

    if (!username || !email || !password || !phonenumder || !confirmPassword) {
      setErrMsg('모든 입력창을 채워주세요');
      return;
    }

    if (password !== confirmPassword) {
      setErrMsg('비밀번호가 일치하지 않습니다');
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
      setSuccessMsg('비밀번호가 일치합니다');
    }

    // 서버로 회원가입 요청을 보냅니다.
    server.emit(
      'register',
      { username, email, password, phonenumder },
      (response) => {
        if (response.success) {
          setSuccessMsg('회원가입에 성공했습니다!');
          setErrMsg('');
        } else {
          setErrMsg(response.message || '회원가입에 실패했습니다');
          setSuccessMsg('');
        }
      }
    );
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const checkPasswordMatch = () => {
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue = confirmPasswordRef.current.value;
    if (passwordValue === confirmPasswordValue) {
      setPasswordMatch(true);
      setSuccessMsg('비밀번호가 같습니다!');
    } else {
      setPasswordMatch(false);
      setErrMsg('비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <>
      <div className="register-form">
        <h2>회원가입</h2>
        <div className="accounttxt">이름</div>
        <input placeholder="이름을 입력해주세요" ref={usernameRef} />
        <div className="accounttxt">이메일</div>
        <input placeholder="이메일을 입력해주세요" ref={emailRef} />
        <div className="accounttxt">비밀번호</div>
        <div className="input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="10-20자의 영문, 숫자, 특수문자 모두 조합"
            ref={passwordRef}
            className={`password-input ${passwordMatch ? 'match' : ''}`}
          />
          <div className="icon-container" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <IoMdEyeOff className="icon" />
            ) : (
              <IoMdEye className="icon" />
            )}
          </div>
        </div>
        <div className="input-container">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            ref={confirmPasswordRef}
            className={`password-input ${passwordMatch ? 'matchcheck' : ''}`}
            onChange={() => {
              setPasswordMatch(
                passwordRef.current.value === confirmPasswordRef.current.value
              );
            }}
          />
          <div
            className="icon-container"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <IoMdEyeOff className="icon" />
            ) : (
              <IoMdEye className="icon" />
            )}
          </div>
        </div>
        {passwordMatch && (
          <div className="success-message1">비밀번호가 일치합니다</div>
        )}
        <div className="accounttxt">휴대폰 번호</div>
        <div>
          <input
            type="phonenumder"
            placeholder="본인 인증이 필요합니다"
            ref={phonenumderRef}
          />
          <Button className="phone-button" btn="인증" click={handleRegister} />
        </div>
        <Button
          className="register-button"
          btn="가입하기"
          click={handleRegister}
        />
        {errMsg && <div className="error-message">{errMsg}</div>}
        {successMsg && <div className="success-message">{successMsg}</div>}
        <div className="loginq">
          이미 계정이 있습니까? <span>로그인하기</span>{' '}
        </div>
      </div>
    </>
  );
}

export default Register;


// Register.js(checkPasswordMatch 제거 버전)
// import { useState, useRef } from 'react';
// import Button from '../pages/Button';
// import server from '../pages/Server';
// import '../styles/Register.css';
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

// function Register() {
//   const [errMsg, setErrMsg] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const usernameRef = useRef('');
//   const emailRef = useRef('');
//   const passwordRef = useRef('');
//   const confirmPasswordRef = useRef('');
//   const phonenumderRef = useRef('');
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordMatch, setPasswordMatch] = useState(false);

//   const handleRegister = () => {
//     const username = usernameRef.current.value;
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const confirmPassword = confirmPasswordRef.current.value;
//     const phonenumder = phonenumderRef.current.value;

//     if (!username || !email || !password || !phonenumder || !confirmPassword) {
//       setErrMsg('모든 입력창을 채워주세요');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrMsg('비밀번호가 일치하지 않습니다');
//       setPasswordMatch(false);
//       return;
//     } else {
//       setPasswordMatch(true);
//       setSuccessMsg('비밀번호가 일치합니다');
//     }

//     server.emit(
//       'register',
//       { username, email, password, phonenumder },
//       (response) => {
//         if (response.success) {
//           setSuccessMsg('회원가입에 성공했습니다!');
//           setErrMsg('');
//         } else {
//           setErrMsg(response.message || '회원가입에 실패했습니다');
//           setSuccessMsg('');
//         }
//       }
//     );
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const checkPasswordMatch = () => {
//     const passwordValue = passwordRef.current.value;
//     const confirmPasswordValue = confirmPasswordRef.current.value;
//     if (passwordValue === confirmPasswordValue) {
//       setPasswordMatch(true);
//       setSuccessMsg('비밀번호가 같습니다!');
//     } else {
//       setPasswordMatch(false);
//       setErrMsg('비밀번호가 일치하지 않습니다');
//     }
//   };

//   return (
//     <>
//       <div className="register-form">
//         <h2>회원가입</h2>
//         <div className="accounttxt">이름</div>
//         <input placeholder="이름을 입력해주세요" ref={usernameRef} />
//         <div className="accounttxt">이메일</div>
//         <input placeholder="이메일을 입력해주세요" ref={emailRef} />
//         <div className="accounttxt">비밀번호</div>
//         <div className="input-container">
//           <input
//             type={showPassword ? 'text' : 'password'}
//             placeholder="10-20자의 영문, 숫자, 특수문자 모두 조합"
//             ref={passwordRef}
//             className={`password-input ${passwordMatch ? 'match' : ''}`}
//           />
//           <div className="icon-container" onClick={togglePasswordVisibility}>
//             {showPassword ? (
//               <IoMdEyeOff className="icon" />
//             ) : (
//               <IoMdEye className="icon" />
//             )}
//           </div>
//         </div>
//         <div className="input-container">
//           <input
//             type={showConfirmPassword ? 'text' : 'password'}
//             placeholder="비밀번호 확인"
//             ref={confirmPasswordRef}
//             className={`password-input ${passwordMatch ? 'matchcheck' : ''}`}
//             onChange={checkPasswordMatch} // 이 부분을 변경
//           />
//           <div
//             className="icon-container"
//             onClick={toggleConfirmPasswordVisibility}
//           >
//             {showConfirmPassword ? (
//               <IoMdEyeOff className="icon" />
//             ) : (
//               <IoMdEye className="icon" />
//             )}
//           </div>
//         </div>
//         {passwordMatch && (
//           <div className="success-message1">비밀번호가 일치합니다</div>
//         )}
//         <div className="accounttxt">휴대폰 번호</div>
//         <div>
//           <input
//             type="phonenumder"
//             placeholder="본인 인증이 필요합니다"
//             ref={phonenumderRef}
//           />
//           <Button className="phone-button" btn="인증" click={handleRegister} />
//         </div>
//         <Button
//           className="register-button"
//           btn="가입하기"
//           click={handleRegister}
//         />
//         {errMsg && <div className="error-message">{errMsg}</div>}
//         {successMsg && <div className="success-message">{successMsg}</div>}
//         <div className="loginq">
//           이미 계정이 있습니까? <span>로그인하기</span>{' '}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;
