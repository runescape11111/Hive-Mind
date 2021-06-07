import { useState } from "react";
import { useAuth } from "../../util/auth";
import useLoginRedirect from "../../util/useLoginRedirect";

function LoginPage() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // custom hook redirects to previous page or default page if user is logged in
  useLoginRedirect();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!password || password.length < 8) {
      return alert("Invalid password. Must contain at least 8 characters.");
    }
    if (!email) {
      return alert("Must provide an email address.");
    }
    await auth.login({ email, password });
  };

  const message = auth.pending
    ? "Processing request..."
    : auth.error || "Please complete the form and click submit.";

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          disabled={auth.pending}
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          disabled={auth.pending}
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <br />
        <button type="submit" disabled={auth.pending}>
          {auth.pending ? "⌛" : "Submit"}
        </button>
      </form>
      <p>{message}</p>
    </>
  );
}

export default LoginPage;
