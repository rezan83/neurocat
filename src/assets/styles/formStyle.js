import { containerChild } from "./containerChild";

export const formStyle = {
  form: {
    ...containerChild.child,
    height: "40px",
    margin: "5px 0 20px 0",
    backgroundColor: "transparent",
  },
  input: {
    flex: "11",
    maxWidth: "85%",
    padding: "10px",
    height: "40px",
    border: 0,
    boxSizing: "border-box",
    borderRadius: "0",
  },
  button: {
    ...containerChild.button,
    height: "40px",
    fontSize: "30px",
    backgroundColor: "#3dffdb",
  },
};
