import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [blogdata, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ marginTop: "2em" }}>Welcome to Our Blog Site</h1>
      <h2>Look at our collections of Blogs!!!</h2>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <TableContainer style={{ backgroundColor: "lightsteelblue", padding: "1em", width: "40em" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogdata.map((val) => (
                <TableRow key={val.id}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Home;