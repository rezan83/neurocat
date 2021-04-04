import { secondaryColor, deleteButtonColor, taskColor } from "./colors";
export const containerChild = {
  child: {
    color: taskColor,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
    height: "30px",
    width: "100%",
    backgroundColor: secondaryColor,
  },
  button: {
    fontSize: "20px",
    flex: "1",
    marginRight: "2px",
    border: 0,
    backgroundColor: deleteButtonColor,
    cursor: "pointer",
  },
};