
const killSession = () => {
  localStorage.removeItem("token");
  location.href = "/home"
};

export default killSession;
