import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Addemployee } from "./Addemployee";

export const Apidata = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://api.github.com/users");
    // console.log(result.data)
    JSON.stringify(sessionStorage.setItem("employeelist", result.data));
    setData(result.data);
  };
  const handledelete = (ind) => {
    const result = data.filter((item, i) => i !== ind);
    console.log(result.length);
    setData(result);
  };

  const handlenext = () => {
    navigate("/addemployee", {
      state: { data },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Button variant="contained" onClick={handlenext}>
        Add New Employee
      </Button>
      <h1>User list</h1>

      <Grid container spacing={3}>
        {data.map((item, ind) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Avatar src={item.avatar_url} />
                <h2>{item.type}</h2>
                <h2>{item.site_admin}</h2>
                <h2>Login: {item.login}</h2>
                <h2>ID:{item.id}</h2>
                <Button variant="contained" onClick={() => handledelete(ind)}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
