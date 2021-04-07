export const pinStyles = {
  pin_container: {
    margin: "100px 0 0 0",
    display: "flex",
    "flexDirection": "column",
    padding: 0,
    width: "96vw",
    height: "90vw"
  },
  pin_grid: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    backgroundColor: "lightgray",
  },
  pin_column: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    padding: "0 8px 0 8px"
  },
  pin_width: 250,
};
