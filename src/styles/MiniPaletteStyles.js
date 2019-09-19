
export default {
    root: {
      backgroundColor: "white",
      // border: "1px solid black",
      borderRadius: "5px",
      padding: "0.5rem",
      position: "relative",
      overflow: "hidden",
    cursor: "pointer",
      "&:hover svg": {
        opacity: 1
    },
    boxShadow: '0px 2px 24px 9px rgba(0,0,0,0.3)',
  },
    colors: {
      height: "150px",
      width: "100%",
      borderRadius: "5px",
      overflow: "hidden"
  },
    
    title: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0",
      color: "black",
      paddingTop: "0.5rem",
      fontSize: "1rem",
      position: "relative",
      lineHeight: "initial"
 
  },
    
    emoji: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem",
      
  },
    
    miniColor: {
      height: "25%",
      width: "20%",
      display: "inline-block",
      margin: "0 auto",
      position: "relative",
      marginBottom: "-3.5px"
  },
  delete: {
      
  },
  deleteIcon: {
    color: "white",
    backgroundColor: 'transpernt',
    width: '30px',
    height: '25px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '10px', 
    zIndex: 10,
    opacity: 0,
  }
  };