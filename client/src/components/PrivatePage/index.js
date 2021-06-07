import { useAuth } from "../../util/auth";

// PrivatePage is an example include to demonstrate a route protected from
// unauthenticated users. See the routing in App.js.
function PrivatePage() {
  const auth = useAuth();
  return <h1>Hello, {auth.user.username}!</h1>;
}

export default PrivatePage;
