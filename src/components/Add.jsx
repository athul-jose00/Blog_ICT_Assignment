
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";


const Add = () => {
  return (
     <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            marginTop: "4.67em",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            width: "40%",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "1.5em",
          }}
        >
          <h2 style={{ textDecoration: "underline", color: "black" }}>
            Add A Blog
          </h2>
          <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
            <p style={{ minWidth: "150px", textAlign: "left", margin: 0 }}>
              Blog Title
            </p>
            <TextField
              id="filled-basic"
              label="Enter Title of Your Blog"
              
              variant="filled"
              sx={{ width: "300px" }}
            />
          </div>
          <div
            style={{ display: "flex", gap: "1em", justifyContent: "space-evenly" }}
          >
            <p style={{ minWidth: "150px", textAlign: "left" }}>Blog Description</p>
            <TextField
              id="filled-basic"
              label="Enter Description of Your Blog"
              variant="filled"
              
              sx={{ width: "300px" }}
            />
          </div>
          <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
            <p style={{ minWidth: "150px", textAlign: "left", margin: 0 }}>
              Author
            </p>
            <TextField
              id="filled-basic"
              label="Enter Author Of Blog"
              variant="filled"
             
              sx={{ width: "300px" }}
            />
          </div>
          
          <div>
            <Button variant="contained" color="success" >
              Add Blog
            </Button>
          </div>
        </div>
  )
}

export default Add