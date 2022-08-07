import { createContext } from "react";

const UserContext = createContext({
  name: [null, () => {}],
});

export default UserContext;