import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";



const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { status, data } = useSession();
  const [error, setError] = useState(null)
  const [ok, setOk] = useState(true);
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if(res.ok==false){
        setOk(false);
        setError(res.error);
    }
    
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {
            ok==false?(<div> {error} </div>):<> </>
        }
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;