import React from "react";
import TableDataRow from "../TableDataRow/TableDataRow";

function TableData(props) {
  const { dataUser, editUser, changeEditUserStatus, deleteUser } = props;
  const deleteButtonClick = (idUser) => {
    deleteUser(idUser);
  };
  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead className="thead-inverse">
          <tr>
            <th scope="row">STT</th>
            <th>Họ tên</th>
            <th>Điện thoại</th>
            <th>Quyền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((item, key) => {
            return (
              <TableDataRow
                deleteButtonClick={(idUser) => deleteButtonClick(idUser)}
                data={item}
                id={item.id}
                key={key}
                editUser={(user) => editUser(item)}
                changeEditUserStatus={changeEditUserStatus}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
