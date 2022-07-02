import background from "./data/back.jpg";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "top 47% right 75%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          minWidth: "300px",
          background: "rgba(255,255,255,.85)",
          boxShadow: "0 0 80px rgb(0 0 0 / 80%)",
          float: "right",
          minHeight: "500px",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default Login;
