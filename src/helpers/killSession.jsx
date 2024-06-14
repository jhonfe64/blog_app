const killSession = () => {
  localStorage.removeItem("token");
  window.location.assign("/home");
};

export default killSession;
