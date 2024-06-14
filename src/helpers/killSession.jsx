
const killSession = () => {
  localStorage.removeItem("token");
  location.pathname = "/home"
};

export default killSession;
