import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Card, CardContent, Avatar } from "@mui/material";

export const Addemployee = () => {
  const rcvd = useLocation();
  const [data, setdata] = useState([]);
  const [empdata, setEmpdata] = useState({});

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  const local = localStorage.getItem(data);
  console.log("hello", local);

  const handlesave = () => {
    setdata([empdata, ...data]);
  };
  const handleremove = (item) => {
    const Filtered = data.filter((elem) => elem !== item);
    setdata([...Filtered]);
  };

  return (
    <div>
      <div style={{ margin: "30px", paddingLeft: "40%", fontSize: "30px" }}>
        <input
          type="number"
          placeholder="Id"
          onChange={(e) => setEmpdata({ id: e.target.value })}
        ></input>{" "}
        <br />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setEmpdata({ ...empdata, name: e.target.value })}
        ></input>
        <br />
        <input
          type="password"
          placeholder="password "
          onChange={(e) => setEmpdata({ ...empdata, password: e.target.value })}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Avatar Image"
          onChange={(e) => setEmpdata({ ...empdata, img: e.target.value })}
        ></input>
        <br />
        <Button variant="contained" onClick={handlesave}>
          Add
        </Button>
      </div>
      <div>
        <Grid container spacing={3}>
          {data.map((item, ind) => {
            return (
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Avatar src={item.img} />
                    {/* <h2>{item.id}</h2> */}
                    <p>
                      {" "}
                      <b> ID:</b>
                      {item.id}
                    </p>
                    <p>
                      {" "}
                      <b> Name: </b> {item.name}
                    </p>
                    <p>
                      {" "}
                      <b> Password: </b>
                      {item.password}
                    </p>
                    <Button
                      variant="contained"
                      onClick={() => handleremove(item)}
                    >
                      Remove
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};
