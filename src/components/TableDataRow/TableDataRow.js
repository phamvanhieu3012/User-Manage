import React from "react";

function TableDataRow(props) {
  const { data, id, editUser, changeEditUserStatus, deleteButtonClick } = props;
  const permissionShow = () => {
    if (data.permission === "1") return "Admin";
    else if (data.permission === "2") return "Moderator";
    else return "Normal User";
  };
  const editClick = () => {
    editUser();
    changeEditUserStatus();
  };
  const handleDelete = (idUser) => {
    deleteButtonClick(idUser);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{permissionShow()}</td>
      <td>
        <div className="btn btn-warning sua" onClick={() => editClick()}>
          <i className="fa fa-edit"> Sửa</i>
        </div>
        <div className="btn btn-danger xoa" onClick={() => handleDelete(id)}>
          <i className="fa fa-trash"> Xóa</i>
        </div>
      </td>
    </tr>
  );
}

export default TableDataRow;
