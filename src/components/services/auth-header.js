export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user && user.token) {
     
      return { "auth-token": user.token };
    } else {
      return {};
    }
  }