import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import { Home, PostAdd, Translate } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      sx={{
        background: "linear-gradient(135deg, #FF5722 0%, #FF9800 100%)",
        padding: "0.5rem 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
      <div>
      <Link to="/">
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            color:"#FF5722",
            backgroundColor:"white",
            padding: "0.25rem 1rem",
            borderRadius: "8px",
            "&:hover": {
              transform: "scale(1.05)", // Zoom effect
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            },
            transition: "all 0.3s ease",
            cursor: "pointer",
            
            
            
          }}
        >
          BLOG App
        </Typography>
        </Link>
</div>

        
        <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <Link to="/">
          <Button
            variant="contained"
            startIcon={<Home />}
            sx={{
              backgroundColor: "white",
              color: "#FF5722",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "translateY(-2px)",
              },
              fontWeight: "600",
              
              padding: "0.5rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            Home
          </Button>
          </Link>
          <Link to="/add">
          <Button
            variant="contained"
            startIcon={<PostAdd />}
            sx={{
              backgroundColor: "white",
              color: "#FF5722",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "translateY(-2px)",
              },
              fontWeight: "600",
              textTransform: "none",
              padding: "0.5rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            Add Blog
          </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
