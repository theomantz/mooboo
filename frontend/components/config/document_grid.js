export const docStyles = {
  docContainer: {
    margin: "100px 0 0 0",
    display: "flex",
    "flexDirection": "column",
    padding: 0,
    width: "96vw",
    height: "90vw"
  },
  docGrid: {
    display: "grid",
    width: "95vw",
    height: "100%",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
  },
  docColumn: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    padding: "0 8px 0 8px",
    display: "flex",
    flexDirection: "column"
  },
  docCard: {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    padding: "8px 0 2px 0"
  },
  docColWidth: 250,
};
