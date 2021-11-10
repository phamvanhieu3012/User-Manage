import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import TableData from "./components/TableData/TableData";
import data from "./data.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [statusForm, setStatusForm] = useState(false);
  const [dataUser, setDataUser] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [editUserStatus, setEditUserStatus] = useState(false);
  const [userEditObject, setUserEditObject] = useState({});

  var dl = [];
  dataUser.forEach((item) => {
    //khac -1 la ton tai
    if (item.name.indexOf(searchText) !== -1) {
      dl.push(item);
    }
  });

  useEffect(() => {
    if (localStorage.getItem("userData") === null)
      localStorage.setItem("userData", JSON.stringify(data));
    else {
      setDataUser(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  const changeStatus = () => {
    setStatusForm(!statusForm);
  };
  const changeEditUserStatus = () => {
    setEditUserStatus(!editUserStatus);
  };
  const getTextSearch = (dt) => {
    setSearchText(dt);
  };
  const getNewUserData = (name, phone, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = dataUser;
    items.push(item);
    setDataUser(items);
  };

  const getUserEditInfoApp = (info) => {
    dataUser.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(dataUser));
  };

  const editUser = (user) => {
    setUserEditObject(user);
  };
  const deleteUser = (idUser) => {
    //Ham filter: Loc mang bo di nhung ptu tm
    var tempData = dataUser;
    tempData = tempData.filter((item) => item.id !== idUser);
    setDataUser(tempData);
    localStorage.setItem("userData", JSON.stringify(tempData));
  };
  return (
    <div className="App">
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <SearchForm
              getUserEditInfoApp={(info) => getUserEditInfoApp(info)}
              getTextSearch={getTextSearch}
              statusForm={statusForm}
              changeStatus={changeStatus}
              editUserStatus={editUserStatus}
              changeEditUserStatus={changeEditUserStatus}
              userEditObject={userEditObject}
            />
            <TableData
              changeEditUserStatus={changeEditUserStatus}
              dataUser={dl}
              editUser={(user) => editUser(user)}
              deleteUser={(idUser) => deleteUser(idUser)}
            />
            <AddUser
              add={(name, phone, permission) =>
                getNewUserData(name, phone, permission)
              }
              statusForm={statusForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
