import React, { useState } from "react";

function AddUser(props) {
  const { statusForm, add } = props;
  const [id, setId] = useState("");
  const [namen, setNamen] = useState("");
  const [phonen, setPhonen] = useState("");
  const [permissionn, setPermissionn] = useState("");
  if (statusForm)
    return (
      <div className="col-3">
        <form>
          <div className="card border-primary mb-3 mt-2">
            <h5 className="card-header">Thêm mới User vào hệ thống</h5>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  aria-describedby="helpId"
                  placeholder="Tên user"
                  onChange={(event) => setNamen(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  aria-describedby="helpId"
                  placeholder="Điện thoại"
                  onChange={(event) => setPhonen(event.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  name="permission"
                  className="form-control"
                  onChange={(event) => setPermissionn(event.target.value)}
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
                type="reset"
                value="Thêm"
                className="btn btn-primary"
                onClick={(name, phone, permission) =>
                  add(namen, phonen, permissionn)
                }
              />
            </div>
          </div>
        </form>
      </div>
    );
  else return null;
}

export default AddUser;
