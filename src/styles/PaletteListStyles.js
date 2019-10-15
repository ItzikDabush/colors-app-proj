import sizes from "./sizes";

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: 'opacity 500ms ease-out'
    }

  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  
    backgroundColor: "#f5f5f5",
    overflowY: 'auto',
    lineHeight: '1'
 
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: '2%',
    justifyContent: 'center',
    
    [sizes.down('xl')]: {
      width: "80%",

    },
    [sizes.down('xs')]: {
      width: "70%",

    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "10px",
    color: "black",
    alignItems: 'center', 
    "& a": {
      color: "black",
      textDecoration: "none",
      opacity: 1
    },
    "& a:hover": {
      opacity: 0.7
    },

    '& img': {
      width: '10%'
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "2.5rem",

    [sizes.down('md')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "1.5rem",
      width: "100%",
      

    },


    [sizes.down('sm')]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "1.5rem",
      width: "100%",
      

    },
    [sizes.down('xs')]: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: "1.5rem",
      width: "100%",

    }
  }
};
