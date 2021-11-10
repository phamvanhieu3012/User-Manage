import React, { useState } from "react";

function EditUser(props) {
  const { changeEditUserStatus, getUserEditInfo, userEditObject } = props;
  const [id, setId] = useState(userEditObject.id);
  const [name, setName] = useState(userEditObject.name);
  const [phone, setPhone] = useState(userEditObject.phone);
  const [permission, setPermission] = useState(userEditObject.permission);

  const saveButtonHandle = () => {
    var info = {};
    info.id = id;
    info.name = name;
    info.phone = phone;
    info.permission = permission;
    getUserEditInfo(info);

    changeEditUserStatus();
  };

  return (
    <div className="col-12">
      <form>
        <div className="card text-white bg-secondary mb-3 mt-2">
          <h5 className="card-header">Sửa thông tin User</h5>
          <div className="card-body text-center">
            <div className="form-group">
              <input
                defaultValue={userEditObject.name}
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="helpId"
                placeholder="Tên user"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                defaultValue={userEditObject.phone}
                className="form-control"
                name="phone"
                id="phone"
                aria-describedby="helpId"
                placeholder="Điện thoại"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <select
                name="permission"
                className="form-control"
                defaultValue={userEditObject.permission}
                onChange={(e) => setPermission(e.target.value)}
              >
                <option>Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Moderator</option>
                <option value={3}>Normal</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <input
              type="button"
              value="Lưu"
              className="btn btn-danger"
              onClick={() => saveButtonHandle()}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
