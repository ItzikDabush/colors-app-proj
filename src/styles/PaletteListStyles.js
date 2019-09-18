import sizes from "./sizes";
import bg from './bg.svg'
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
     /* background by SVGBackgrounds.com */
    backgroundColor: "#9ca191",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    overflowY: 'auto',
 
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: '5%',
    
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
    color: "white",
    alignItems: 'center', 
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    

    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down('sm')]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1.5rem",
      width: "90%",
      

    },
    [sizes.down('xs')]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.5rem",
      width: "90%",

    }
  }
};
