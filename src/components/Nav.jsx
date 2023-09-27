import { Input } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SearchOutlined } from "@ant-design/icons";
import './Nav.css';
const Nav = () => {
  return (
    <div className="container-fluid background-nav d-flex align-items-center justify-content-between ">
        <div >
          <Input
          style={{background: '#4c94be', color: '#fff'}}
            suffix={<SearchOutlined style={{ fontSize: "150%" }} />}
            allowClear
          ></Input>
        </div>
        <h2 className="text-light fst-italic">TodoList</h2>

        <div className="d-flex ">
          <i className="p-2 m-1  rounded d-flex align-items-center  text-light background-icon bi bi-plus-lg "></i>
          <i className="p-2 m-1  rounded d-flex align-items-center  text-light background-icon bi bi-exclamation-circle-fill"></i>
          <i className="p-2 m-1  rounded d-flex align-items-center  text-light background-icon bi bi-bell-fill"></i>
          <i className="p-2 m-1  rounded d-flex align-items-center  text-light background-icon bi bi-person-circle"></i>
        </div>
      </div>
  )
}

export default Nav