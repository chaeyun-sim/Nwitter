export const validation = (error) => {
  let text;
      switch (error.code) {
        case "auth/user-not-found" || "auth/wrong-password":
          text = "이메일 혹은 비밀번호가 일치하지 않습니다.";
          return;
        case "auth/email-already-in-use":
          text = "이미 사용 중인 이메일입니다.";
          return;
        case "auth/weak-password":
          text = "비밀번호는 6글자 이상이어야 합니다.";
          return;
        case "auth/network-request-failed":
          text = "네트워크 연결에 실패 하였습니다.";
          return;
        case "auth/invalid-email":
          text = "잘못된 이메일 형식입니다.";
          return;
        case "auth/internal-error":
          text = "잘못된 요청입니다.";
          return;
        default:
          text = "로그인에 실패 하였습니다.";
      }
  return text;
}