import React, { useState } from "react";
import EditUser from "../EditUser/EditUser";

function SearchForm(props) {
  const { getUserEditInfoApp } = props;
  const {
    statusForm,
    changeStatus,
    getTextSearch,
    editUserStatus,
    changeEditUserStatus,
    userEditObject,
  } = props;
  const [tempValue, setTempValue] = useState("");
  const [userObj, setUserObj] = useState({});

  const getUserEditInfo = (info) => {
    setUserObj(info);
    getUserEditInfoApp(info);
  };

  return (
    <div className="col-12">
      <div className="row">
        {editUserStatus ? (
          <EditUser
            changeEditUserStatus={changeEditUserStatus}
            userEditObject={userEditObject}
            getUserEditInfo={(info) => getUserEditInfo(info)}
          />
        ) : null}
      </div>
      <div className="form-group text-right">
        <div className="btn-group">
          <input
            type="text"
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Nhập tên"
            value={tempValue}
            onChange={(event) => setTempValue(event.target.value)}
          />
          <div
            type="button"
            name=""
            id=""
            className="btn btn-info"
            onClick={() => getTextSearch(tempValue)}
          >
            Tìm
          </div>
        </div>
        <div className="btn-group1">
          {statusForm ? (
            <div
              className="btn btn-block btn-outline-secondary"
              onClick={changeStatus}
            >
              Đóng lại
            </div>
          ) : (
            <div
              className="btn btn-block btn-outline-info"
              onClick={changeStatus}
            >
              Thêm mới
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SearchForm;
