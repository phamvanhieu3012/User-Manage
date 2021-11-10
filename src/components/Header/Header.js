import React from "react";

function Header(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-3">Project quản lý thành viên bằng ReactJS</h1>
          <hr className="my-2" />
          <p className="lead">Với dữ liêu JSON</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
