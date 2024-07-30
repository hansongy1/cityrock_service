// Server.js
const server = {
    emit: (event, data, callback) => {
      if (event === "register") {
        // 서버에서의 회원가입 로직을 시뮬레이션합니다.
        setTimeout(() => {
          if (data.username === "existinguser") {
            callback({ success: false, message: "이미 존재하는 사용자입니다." });
          } else {
            callback({ success: true });
          }
        }, 1000);
      }
    },
  };
  
  export default server;
  