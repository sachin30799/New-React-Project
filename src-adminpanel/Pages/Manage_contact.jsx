import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Manage_contact() {
  useEffect(() => {
    fetchdata();
  }, []);

  const [data, setData] = useState([]);
  const fetchdata = () => {
    fetch(`http://localhost:3000/user`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const ondelete = (id) => {
    fetch(
      `http://localhost:3000/user/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      fetchdata();
    });
  };

  return (
    <div>
      <div>
        <div>
          <div id="top">
            <nav
              className="navbar navbar-inverse navbar-fixed-top "
              style={{ paddingTop: 10, height: 50 }}
            >
              <NavLink
                data-original-title="Show/Hide Menu"
                data-placement="bottom"
                data-tooltip="tooltip"
                className="accordion-toggle btn btn-primary btn-sm visible-xs"
                data-toggle="collapse"
                to="#menu"
                id="menu-toggle"
              >
                <i className="icon-align-justify" />
              </NavLink>
              {/* LOGO SECTION */}
              <header className="navbar-header">
                <NavLink to="index.html" className="navbar-brand">
                  <img src="assets/img/logo.png" alt />
                </NavLink>
              </header>
              {/* END LOGO SECTION */}
              <ul className="nav navbar-top-links navbar-right">
                {/* MESSAGES SECTION */}
                <li className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <span className="label label-success">2</span>{" "}
                    <i className="icon-envelope-alt" />
                    &nbsp; <i className="icon-chevron-down" />
                  </NavLink>
                  <ul className="dropdown-menu dropdown-messages">
                    <li>
                      <NavLink to="#">
                        <div>
                          <strong>John Smith</strong>
                          <span className="pull-right text-muted">
                            <em>Today</em>
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                          <br />
                          <span className="label label-primary">Important</span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <strong>Raphel Jonson</strong>
                          <span className="pull-right text-muted">
                            <em>Yesterday</em>
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                          <br />
                          <span className="label label-success">
                            {" "}
                            Moderate{" "}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <strong>Chi Ley Suk</strong>
                          <span className="pull-right text-muted">
                            <em>26 Jan 2014</em>
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing.
                          <br />
                          <span className="label label-danger"> Low </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink className="text-center" to="#">
                        <strong>Read All Messages</strong>
                        <i className="icon-angle-right" />
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/*END MESSAGES SECTION */}
                {/*TASK SECTION */}
                <li className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <span className="label label-danger">5</span>{" "}
                    <i className="icon-tasks" />
                    &nbsp; <i className="icon-chevron-down" />
                  </NavLink>
                  <ul className="dropdown-menu dropdown-tasks">
                    <li>
                      <NavLink to="#">
                        <div>
                          <p>
                            <strong> Profile </strong>
                            <span className="pull-right text-muted">
                              40% Complete
                            </span>
                          </p>
                          <div className="progress progress-striped active">
                            <div
                              className="progress-bar progress-bar-success"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "40%" }}
                            >
                              <span className="sr-only">
                                40% Complete (success)
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <p>
                            <strong> Pending Tasks </strong>
                            <span className="pull-right text-muted">
                              20% Complete
                            </span>
                          </p>
                          <div className="progress progress-striped active">
                            <div
                              className="progress-bar progress-bar-info"
                              role="progressbar"
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "20%" }}
                            >
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <p>
                            <strong> Work Completed </strong>
                            <span className="pull-right text-muted">
                              60% Complete
                            </span>
                          </p>
                          <div className="progress progress-striped active">
                            <div
                              className="progress-bar progress-bar-warning"
                              role="progressbar"
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "60%" }}
                            >
                              <span className="sr-only">
                                60% Complete (warning)
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <p>
                            <strong> Summary </strong>
                            <span className="pull-right text-muted">
                              80% Complete
                            </span>
                          </p>
                          <div className="progress progress-striped active">
                            <div
                              className="progress-bar progress-bar-danger"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "80%" }}
                            >
                              <span className="sr-only">
                                80% Complete (danger)
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink className="text-center" to="#">
                        <strong>See All Tasks</strong>
                        <i className="icon-angle-right" />
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/*END TASK SECTION */}
                {/*ALERTS SECTION */}
                <li className="chat-panel dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <span className="label label-info">8</span>{" "}
                    <i className="icon-comments" />
                    &nbsp; <i className="icon-chevron-down" />
                  </NavLink>
                  <ul className="dropdown-menu dropdown-alerts">
                    <li>
                      <NavLink to="#">
                        <div>
                          <i className="icon-comment" /> New Comment
                          <span className="pull-right text-muted small">
                            {" "}
                            4 minutes ago
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <i className="icon-twitter info" /> 3 New Follower
                          <span className="pull-right text-muted small">
                            {" "}
                            9 minutes ago
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <i className="icon-envelope" /> Message Sent
                          <span className="pull-right text-muted small">
                            {" "}
                            20 minutes ago
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <i className="icon-tasks" /> New Task
                          <span className="pull-right text-muted small">
                            {" "}
                            1 Hour ago
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="#">
                        <div>
                          <i className="icon-upload" /> Server Rebooted
                          <span className="pull-right text-muted small">
                            {" "}
                            2 Hour ago
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink className="text-center" to="#">
                        <strong>See All Alerts</strong>
                        <i className="icon-angle-right" />
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* END ALERTS SECTION */}
                {/*ADMIN SETTINGS SECTIONS */}
                <li className="dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    to="#"
                  >
                    <i className="icon-user " />
                    &nbsp; <i className="icon-chevron-down " />
                  </NavLink>
                  <ul className="dropdown-menu dropdown-user">
                    <li>
                      <NavLink to="#">
                        <i className="icon-user" /> User Profile{" "}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="icon-gear" /> Settings{" "}
                      </NavLink>
                    </li>
                    <li className="divider" />
                    <li>
                      <NavLink to="login.html">
                        <i className="icon-signout" /> Logout{" "}
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/*END ADMIN SETTINGS */}
              </ul>
            </nav>
          </div>
          {/* END HEADER SECTION */}
          {/* MENU SECTION */}
          <div id="left">
            <div className="media user-media well-small">
              <NavLink className="user-link" to="#">
                <img
                  className="media-object img-thumbnail user-img"
                  alt="User Picture"
                  src="assets/img/user.gif"
                />
              </NavLink>
              <br />
              <div className="media-body">
                <h5 className="media-heading"> Joe Romlin</h5>
                <ul className="list-unstyled user-info">
                  <li>
                    <NavLink
                      className="btn btn-success btn-xs btn-circle"
                      style={{ width: 10, height: 12 }}
                    />{" "}
                    Online
                  </li>
                </ul>
              </div>
              <br />
            </div>
            <ul id="menu" className="collapse">
              <li className="panel active">
                <NavLink to="/">
                  <i className="icon-table" /> Dashboard
                </NavLink>
              </li>

              <li className>
                <NavLink to="/add_emp">
                  <i className="icon-angle-right" /> Advance Form{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/manage_emp">
                  <i className="/manage-user" /> Data Tables{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/manage_user">
                  <i className="/manage-user" /> Manage User{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/manage_contact">
                  <i className="/manage-user" /> Manage Contact{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/login">
                  <i className="icon-signin" /> Login Page{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          {/*END MENU SECTION */}

          {/* PAge Content */}

          <div id="content">
            <div className="inner">
              <div className="row">
                <div className="col-lg-12">
                  <h2> Contact Details </h2>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12">
                  <div className="panel panel-default">
                    .<div className="panel-heading">Contact Details</div>
                    <div className="panel-body">
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Phone No.</th>
                              <th>E-mail</th>
                              <th>Message</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(data).map((item, index, entarr) => {
                              return (
                                <tr>
                                  <td>{data[item].id}</td>
                                  <td>{data[item].name}</td>
                                  <td>{data[item].number}</td>
                                  <td>{data[item].email}</td>
                                  <td>{data[item].msg}</td>
                                  <td>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => ondelete(item)}
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_contact;
