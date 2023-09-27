import "./App.css";
import { Button, Input } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SearchOutlined } from "@ant-design/icons";
import Nav from "./components/Nav";
import Info from "./components/Info";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/tasks").then((response) => {
      setData(response.data.data);
      setLoading(false);
    }).catch(error => {
      setError(error);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Nav />
      <Info />
      <div className="container-fluid bg-info row" style={{ height: 600 }}>
        <div className="list bg-body-secondary rounded-1 p-1 col-3 ms-2 ">
          <p className="fw-bold">Tasks to do</p>
          {data?.map(item => {
            return <p key={item.id} className="text-dark bg-light w-100 p-1 rounded-1">{item?.attributes.title}</p>
          })}
          
          <div className="p-1"> Add a card</div>
        </div>
        <div className="list bg-body-secondary rounded-1 p-1 col-3 ms-2 ">
          <p className="fw-bold">Tasks to do</p>
          <p className="text-dark bg-light w-100 p-1 rounded-1">A</p>
          <div className="p-1"> Add a card</div>
        </div>
        <div className="list bg-body-secondary rounded-1 p-1 col-3 ms-2 ">
          <p className="fw-bold">Tasks to do</p>
          <p className="text-dark bg-light w-100 p-1 rounded-1">A</p>
          <div className="p-1"> Add a card</div>
        </div>
        <Button
          style={{ background: "none", border: "none", textAlign: "left" }}
          className="list col-3"
        >
          Add a list
        </Button>
      </div>
    </>
  );
}

export default App;
