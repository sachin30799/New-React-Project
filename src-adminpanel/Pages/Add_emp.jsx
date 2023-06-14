import React from "react";
import { NavLink } from "react-router-dom";

function Add_emp() {
  return (
    <div>
      <div>
        {/* HEADER SECTION */}
        <div id="top">
          <nav
            className="navbar navbar-inverse navbar-fixed-top "
            style={{ paddingTop: 10, height: 50  }}
          >
            <a
              data-original-title="Show/Hide Menu"
              data-placement="bottom"
              data-tooltip="tooltip"
              className="accordion-toggle btn btn-primary btn-sm visible-xs"
              data-toggle="collapse"
              href="#menu"
              id="menu-toggle"
            >
              <i className="icon-align-justify" />
            </a>
            {/* LOGO SECTION */}
            <header className="navbar-header">
              <a href="index.html" className="navbar-brand">
                <img src="assets/img/logo.png" alt />
              </a>
            </header>
            {/* END LOGO SECTION */}
            <ul className="nav navbar-top-links navbar-right">
              {/* MESSAGES SECTION */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <span className="label label-success">2</span>{" "}
                  <i className="icon-envelope-alt" />
                  &nbsp; <i className="icon-chevron-down" />
                </a>
                <ul className="dropdown-menu dropdown-messages">
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <div>
                        <strong>Raphel Jonson</strong>
                        <span className="pull-right text-muted">
                          <em>Yesterday</em>
                        </span>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                        <br />
                        <span className="label label-success"> Moderate </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a className="text-center" href="#">
                      <strong>Read All Messages</strong>
                      <i className="icon-angle-right" />
                    </a>
                  </li>
                </ul>
              </li>
              {/*END MESSAGES SECTION */}
              {/*TASK SECTION */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <span className="label label-danger">5</span>{" "}
                  <i className="icon-tasks" />
                  &nbsp; <i className="icon-chevron-down" />
                </a>
                <ul className="dropdown-menu dropdown-tasks">
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
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
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a className="text-center" href="#">
                      <strong>See All Tasks</strong>
                      <i className="icon-angle-right" />
                    </a>
                  </li>
                </ul>
              </li>
              {/*END TASK SECTION */}
              {/*ALERTS SECTION */}
              <li className="chat-panel dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <span className="label label-info">8</span>{" "}
                  <i className="icon-comments" />
                  &nbsp; <i className="icon-chevron-down" />
                </a>
                <ul className="dropdown-menu dropdown-alerts">
                  <li>
                    <a href="#">
                      <div>
                        <i className="icon-comment" /> New Comment
                        <span className="pull-right text-muted small">
                          {" "}
                          4 minutes ago
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <div>
                        <i className="icon-twitter info" /> 3 New Follower
                        <span className="pull-right text-muted small">
                          {" "}
                          9 minutes ago
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <div>
                        <i className="icon-envelope" /> Message Sent
                        <span className="pull-right text-muted small">
                          {" "}
                          20 minutes ago
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <div>
                        <i className="icon-tasks" /> New Task
                        <span className="pull-right text-muted small">
                          {" "}
                          1 Hour ago
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#">
                      <div>
                        <i className="icon-upload" /> Server Rebooted
                        <span className="pull-right text-muted small">
                          {" "}
                          2 Hour ago
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a className="text-center" href="#">
                      <strong>See All Alerts</strong>
                      <i className="icon-angle-right" />
                    </a>
                  </li>
                </ul>
              </li>
              {/* END ALERTS SECTION */}
              {/*ADMIN SETTINGS SECTIONS */}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i className="icon-user " />
                  &nbsp; <i className="icon-chevron-down " />
                </a>
                <ul className="dropdown-menu dropdown-user">
                  <li>
                    <a href="#">
                      <i className="icon-user" /> User Profile{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-gear" /> Settings{" "}
                    </a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="login.html">
                      <i className="icon-signout" /> Logout{" "}
                    </a>
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
        {/*PAGE CONTENT */}
        <div id="content">
          <div className="inner">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Advance Form Elements</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="box dark">
                  <header>
                    <div className="icons">
                      <i className="icon-edit" />
                    </div>
                    <h5>Input Text Fields</h5>
                    <div className="toolbar">
                      <ul className="nav">
                        <li>
                          <a href="#">Link</a>
                        </li>
                        <li className="dropdown">
                          <a
                            data-toggle="dropdown"
                            className="dropdown-toggle"
                            href="#"
                          >
                            <i className="icon-th-large" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="accordion-toggle minimize-box"
                            data-toggle="collapse"
                            href="#div-1"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="div-1" className="accordion-body collapse in body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label
                          htmlFor="text1"
                          className="control-label col-lg-4"
                        >
                          Normal Input Field
                        </label>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            id="text1"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="pass1"
                          className="control-label col-lg-4"
                        >
                          Password Field
                        </label>
                        <div className="col-lg-8">
                          <input
                            className="form-control"
                            type="password"
                            id="pass1"
                            data-original-title="Please use your secure password"
                            data-placement="top"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Read only input
                        </label>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            defaultValue="read only"
                            readOnly
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Disabled input
                        </label>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            defaultValue="disabled"
                            disabled="disabled"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="text2"
                          className="control-label col-lg-4"
                        >
                          With Placeholder
                        </label>
                        <div className="col-lg-8">
                          <input
                            type="text"
                            id="text2"
                            placeholder="placeholder text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="limiter"
                          className="control-label col-lg-4"
                        >
                          Input limiter
                        </label>
                        <div className="col-lg-8">
                          <textarea
                            id="limiter"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="text4"
                          className="control-label col-lg-4"
                        >
                          Default Textarea
                        </label>
                        <div className="col-lg-8">
                          <textarea
                            id="text4"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="autosize"
                          className="control-label col-lg-4"
                        >
                          Textarea With Autosize
                        </label>
                        <div className="col-lg-8">
                          <textarea
                            id="autosize"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="tags"
                          className="control-label col-lg-4"
                        >
                          Tags
                        </label>
                        <div className="col-lg-8">
                          <input
                            name="tags"
                            id="tags"
                            defaultValue="foo,bar,baz"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-check" />
                    </div>
                    <h5>Advance Checkbox</h5>
                    <div className="toolbar">
                      <input
                        className="uniform"
                        type="checkbox"
                        defaultChecked="checked"
                      />
                    </div>
                  </header>
                  <div className="body">
                    <h3> Animated Checkbox </h3>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch1" />
                      <label htmlFor="ch1">Default</label>
                    </div>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch2" className="primary" />
                      <label htmlFor="ch2">Primary</label>
                    </div>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch3" className="success" />
                      <label htmlFor="ch3">Success</label>
                    </div>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch4" className="warning" />
                      <label htmlFor="ch4">Warning</label>
                    </div>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch5" className="danger" />
                      <label htmlFor="ch5">Danger</label>
                    </div>
                    <div className="checkbox anim-checkbox">
                      <input type="checkbox" id="ch6" className="info" />
                      <label htmlFor="ch6">Info</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-check" />
                    </div>
                    <h5>Checkbox &amp; Radio</h5>
                    <div className="toolbar">
                      <input
                        className="uniform"
                        type="checkbox"
                        defaultChecked="checked"
                      />
                    </div>
                  </header>
                  <div className="body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Checkbox
                        </label>
                        <div className="col-lg-8">
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="checkbox"
                                defaultValue="option1"
                                defaultChecked="checked"
                              />{" "}
                              Checked checkbox
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="checkbox"
                                defaultValue="option2"
                              />{" "}
                              Unchecked checkbox
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="checkbox"
                                defaultValue="option3"
                                defaultChecked="checked"
                                disabled="disabled"
                              />{" "}
                              Disabled checked
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="checkbox"
                                defaultValue="option2"
                                disabled="disabled"
                              />{" "}
                              Disabled unchecked
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">Radio</label>
                        <div className="col-lg-8">
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="radio"
                                name="optionsRadios"
                                defaultValue="option1"
                                defaultChecked="checked"
                              />
                              Checked radio
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="radio"
                                name="optionsRadios"
                                defaultValue="option2"
                              />{" "}
                              Unchecked radio
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="radio"
                                name="optionsRadios2"
                                defaultValue="option3"
                                defaultChecked="checked"
                                disabled="disabled"
                              />
                              Disabled checked radio
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                className="uniform"
                                type="radio"
                                name="optionsRadios2"
                                defaultValue="option4"
                                disabled="disabled"
                              />
                              Disabled unchecked radio
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">Basic</label>
                        <div className="col-lg-8">
                          <div className="make-switch switch-large">
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div className="make-switch">
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div className="make-switch switch-small">
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div className="make-switch switch-mini">
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div id="dimension-switch" className="make-switch">
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">Color</label>
                        <div className="col-lg-8">
                          <div
                            className="make-switch"
                            data-on="primary"
                            data-off="info"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div
                            className="make-switch"
                            data-on="info"
                            data-off="success"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div
                            className="make-switch"
                            data-on="success"
                            data-off="warning"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div
                            className="make-switch"
                            data-on="warning"
                            data-off="danger"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div
                            className="make-switch"
                            data-on="danger"
                            data-off="default"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                          <div
                            className="make-switch"
                            data-on="default"
                            data-off="primary"
                          >
                            <input type="checkbox" defaultChecked="checked" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-th-large" />
                    </div>
                    <h5>Selects</h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a href="#">Link</a>
                        </li>
                        <li className="dropdown">
                          <a
                            data-toggle="dropdown"
                            className="dropdown-toggle"
                            href="#"
                          >
                            <i className="icon-th-large" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="accordion-toggle minimize-box"
                            data-toggle="collapse"
                            href="#div-2"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="div-2" className="accordion-body collapse in body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Select Dropdown
                        </label>
                        <div className="col-lg-8">
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Select with search
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Choose a Country"
                            className="form-control chzn-select"
                            tabIndex={2}
                          >
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">
                              Congo, The Democratic Republic of The
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="Holy See (Vatican City State)">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">
                              Iran, Islamic Republic of
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea, Republic of">
                              Korea, Republic of
                            </option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova, Republic of">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">
                              Russian Federation
                            </option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and The Grenadines">
                              Saint Vincent and The Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">
                              Svalbard and Jan Mayen
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">
                              Syrian Arab Republic
                            </option>
                            <option value="Taiwan, Republic of China">
                              Taiwan, Republic of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">
                              Virgin Islands, British
                            </option>
                            <option value="Virgin Islands, U.S.">
                              Virgin Islands, U.S.
                            </option>
                            <option value="Wallis and Futuna">
                              Wallis and Futuna
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple select
                        </label>
                        <div className="col-lg-8">
                          <select
                            multiple="multiple"
                            size={5}
                            className="form-control"
                          >
                            <option>1</option>
                            <option selected="selected">2</option>
                            <option>3</option>
                            <option selected="selected">4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple with search
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Choose a Country"
                            className="form-control chzn-select"
                            multiple="multiple"
                            tabIndex={4}
                            style={{ height: 25 }}
                          >
                            <option value="United States" selected="selected">
                              United States
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darussalam">
                              Brunei Darussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos (Keeling) Islands">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">
                              Congo, The Democratic Republic of The
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="Holy See (Vatican City State)">
                              Holy See (Vatican City State)
                            </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">
                              Iran, Islamic Republic of
                            </option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="Korea, Republic of">
                              Korea, Republic of
                            </option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">
                              Libyan Arab Jamahiriya
                            </option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">
                              Micronesia, Federated States of
                            </option>
                            <option value="Moldova, Republic of">
                              Moldova, Republic of
                            </option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">
                              Netherlands Antilles
                            </option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">
                              Russian Federation
                            </option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and The Grenadines">
                              Saint Vincent and The Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">
                              Svalbard and Jan Mayen
                            </option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">
                              Syrian Arab Republic
                            </option>
                            <option value="Taiwan, Republic of China">
                              Taiwan, Republic of China
                            </option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">
                              Tanzania, United Republic of
                            </option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">
                              United States Minor Outlying Islands
                            </option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">
                              Virgin Islands, British
                            </option>
                            <option value="Virgin Islands, U.S.">
                              Virgin Islands, U.S.
                            </option>
                            <option value="Wallis and Futuna">
                              Wallis and Futuna
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Single Select with Groups
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Football Team"
                            className="form-control chzn-select"
                            tabIndex={5}
                          >
                            <optgroup label="NFC EAST">
                              <option>Dallas Cowboys</option>
                              <option>New York Giants</option>
                              <option>Philadelphia Eagles</option>
                              <option>Washington Redskins</option>
                            </optgroup>
                            <optgroup label="NFC NORTH">
                              <option>Chicago Bears</option>
                              <option>Detroit Lions</option>
                              <option>Green Bay Packers</option>
                              <option>Minnesota Vikings</option>
                            </optgroup>
                            <optgroup label="NFC SOUTH">
                              <option>Atlanta Falcons</option>
                              <option>Carolina Panthers</option>
                              <option>New Orleans Saints</option>
                              <option>Tampa Bay Buccaneers</option>
                            </optgroup>
                            <optgroup label="NFC WEST">
                              <option>Arizona Cardinals</option>
                              <option>St. Louis Rams</option>
                              <option>San Francisco 49ers</option>
                              <option>Seattle Seahawks</option>
                            </optgroup>
                            <optgroup label="AFC EAST">
                              <option>Buffalo Bills</option>
                              <option>Miami Dolphins</option>
                              <option>New England Patriots</option>
                              <option>New York Jets</option>
                            </optgroup>
                            <optgroup label="AFC NORTH">
                              <option>Baltimore Ravens</option>
                              <option>Cincinnati Bengals</option>
                              <option>Cleveland Browns</option>
                              <option>Pittsburgh Steelers</option>
                            </optgroup>
                            <optgroup label="AFC SOUTH">
                              <option>Houston Texans</option>
                              <option>Indianapolis Colts</option>
                              <option>Jacksonville Jaguars</option>
                              <option>Tennessee Titans</option>
                            </optgroup>
                            <optgroup label="AFC WEST">
                              <option>Denver Broncos</option>
                              <option>Kansas City Chiefs</option>
                              <option>Oakland Raiders</option>
                              <option>San Diego Chargers</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple Select with Groups
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Football Team"
                            className="form-control chzn-select"
                            multiple="multiple"
                            tabIndex={6}
                          >
                            <optgroup label="NFC EAST">
                              <option selected="selected">
                                Dallas Cowboys
                              </option>
                              <option>New York Giants</option>
                              <option>Philadelphia Eagles</option>
                              <option>Washington Redskins</option>
                            </optgroup>
                            <optgroup label="NFC NORTH">
                              <option>Chicago Bears</option>
                              <option>Detroit Lions</option>
                              <option>Green Bay Packers</option>
                              <option>Minnesota Vikings</option>
                            </optgroup>
                            <optgroup label="NFC SOUTH">
                              <option>Atlanta Falcons</option>
                              <option>Carolina Panthers</option>
                              <option>New Orleans Saints</option>
                              <option>Tampa Bay Buccaneers</option>
                            </optgroup>
                            <optgroup label="NFC WEST">
                              <option>Arizona Cardinals</option>
                              <option>St. Louis Rams</option>
                              <option>San Francisco 49ers</option>
                              <option>Seattle Seahawks</option>
                            </optgroup>
                            <optgroup label="AFC EAST">
                              <option>Buffalo Bills</option>
                              <option>Miami Dolphins</option>
                              <option>New England Patriots</option>
                              <option>New York Jets</option>
                            </optgroup>
                            <optgroup label="AFC NORTH">
                              <option>Baltimore Ravens</option>
                              <option>Cincinnati Bengals</option>
                              <option>Cleveland Browns</option>
                              <option>Pittsburgh Steelers</option>
                            </optgroup>
                            <optgroup label="AFC SOUTH">
                              <option>Houston Texans</option>
                              <option>Indianapolis Colts</option>
                              <option>Jacksonville Jaguars</option>
                              <option>Tennessee Titans</option>
                            </optgroup>
                            <optgroup label="AFC WEST">
                              <option>Denver Broncos</option>
                              <option>Kansas City Chiefs</option>
                              <option>Oakland Raiders</option>
                              <option>San Diego Chargers</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Single Select
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Type of Bear"
                            className="form-control chzn-select"
                            tabIndex={7}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected">Sloth Bear</option>
                            <option disabled="disabled">Sun Bear</option>
                            <option>Polar Bear</option>
                            <option disabled="disabled">Spectacled Bear</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple Select
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Types of Bear"
                            multiple
                            className="form-control chzn-select"
                            tabIndex={8}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected">Sloth Bear</option>
                            <option disabled="disabled">Sun Bear</option>
                            <option selected="selected">Polar Bear</option>
                            <option disabled="disabled">Spectacled Bear</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple Select &amp; Deselect
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Types of Bear"
                            multiple
                            className="form-control chzn-select"
                            id="test_me_paddington"
                            name="test_me_form"
                            tabIndex={8}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected" disabled="disabled">
                              Sloth Bear
                            </option>
                            <option disabled="disabled">Sun Bear</option>
                            <option selected="selected" disabled="disabled">
                              Paddington Bear
                            </option>
                            <option selected="selected">Polar Bear</option>
                            <option disabled="disabled">Spectacled Bear</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Allow Deselect on Single Selects
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Type of Bear"
                            className="form-control chzn-select-deselect"
                            tabIndex={7}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected">Sloth Bear</option>
                            <option>Sun Bear</option>
                            <option>Polar Bear</option>
                            <option>Spectacled Bear</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Single right to left select
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Type of Bear"
                            className="form-control chzn-select chzn-rtl"
                            tabIndex={9}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected">Sloth Bear</option>
                            <option>Polar Bear</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Multiple right to left select
                        </label>
                        <div className="col-lg-8">
                          <select
                            data-placeholder="Your Favorite Types of Bear"
                            multiple
                            className="form-control chzn-select  chzn-rtl"
                            tabIndex={10}
                          >
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option selected="selected">Sloth Bear</option>
                            <option selected="selected">Polar Bear</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <h5>
                      <i className="icon-th-large" /> Dual Select With Filtering
                    </h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a href="#">Link</a>
                        </li>
                        <li className="dropdown">
                          <a
                            data-toggle="dropdown"
                            className="dropdown-toggle"
                            href="#"
                          >
                            <i className="icon-th-large" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                            <li>
                              <a href="#">Demo Link</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="accordion-toggle minimize-box"
                            data-toggle="collapse"
                            href="#div-3"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="div-3" className="accordion-body collapse in body">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              id="box1Filter"
                              type="text"
                              placeholder="Filter"
                              className="form-control"
                            />
                            <span className="input-group-btn">
                              <button
                                id="box1Clear"
                                className="btn btn-warning"
                                type="button"
                              >
                                x
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <select
                            id="box1View"
                            multiple="multiple"
                            className="form-control"
                            size={16}
                          >
                            <option value={501649}>
                              2008-2009 "Mini" Baja
                            </option>
                            <option value={501497}>
                              AAPA - Asian American Psychological Association
                            </option>
                            <option value={501053}>
                              Academy of Film Geeks
                            </option>
                            <option value={500001}>
                              Accounting Association
                            </option>
                            <option value={501227}>ACLU</option>
                            <option value={501610}>Active Minds</option>
                            <option value={501514}>
                              Activism with A Reel Edge (A.W.A.R.E.)
                            </option>
                            <option value={501656}>
                              Adopt a Grandparent Program
                            </option>
                            <option value={501050}>
                              Africa Awareness Student Organization
                            </option>
                            <option value={501075}>
                              African Diasporic Cultural RC Interns
                            </option>
                            <option value={501493}>Agape</option>
                            <option value={501562}>
                              AGE-Alliance for Graduate Excellence
                            </option>
                            <option value={500676}>
                              AICHE (American Inst of Chemical Engineers)
                            </option>
                            <option value={501460}>
                              AIDS Sensitivity Awareness Project ASAP
                            </option>
                            <option value={500004}>Aikido Club</option>
                            <option value={500336}>Akanke</option>
                          </select>
                          <hr />
                          <div className="alert alert-block">
                            <span id="box1Counter" className="countLabel" />
                            <select id="box1Storage" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div
                          className="btn-group btn-group-vertical"
                          style={{ whiteSpace: "normal" }}
                        >
                          <button
                            id="to2"
                            type="button"
                            className="btn btn-primary"
                          >
                            <i className="icon-chevron-right" />
                          </button>
                          <button
                            id="allTo2"
                            type="button"
                            className="btn btn-primary"
                          >
                            <i className="icon-forward" />
                          </button>
                          <button
                            id="allTo1"
                            type="button"
                            className="btn btn-danger"
                          >
                            <i className="icon-backward" />
                          </button>
                          <button
                            id="to1"
                            type="button"
                            className="btn btn-danger"
                          >
                            <i className=" icon-chevron-left icon-white" />
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              id="box2Filter"
                              type="text"
                              placeholder="Filter"
                              className="form-control"
                            />
                            <span className="input-group-btn">
                              <button
                                id="box2Clear"
                                className="btn btn-warning"
                                type="button"
                              >
                                x
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <select
                            id="box2View"
                            multiple="multiple"
                            className="form-control"
                            size={16}
                          />
                        </div>
                        <hr />
                        <div className="alert alert-block">
                          <span id="box2Counter" className="countLabel" />
                          <select id="box2Storage" className="form-control">
                            {" "}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AUTOMATIC JUMP*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-exchange" />
                    </div>
                    <h5>Automatically jump to the next input-field</h5>
                  </header>
                  <div className="body">
                    <form id="validVal" className="form-inline">
                      <div className="row form-group">
                        <div className="col-lg-4">
                          <input
                            className="form-control autotab"
                            type="text"
                            maxLength={3}
                            tabIndex={11}
                          />
                        </div>
                        <div className="col-lg-4">
                          <input
                            className="form-control autotab"
                            type="text"
                            maxLength={4}
                            tabIndex={12}
                          />
                        </div>
                        <div className="col-lg-4">
                          <input
                            className="form-control"
                            type="text"
                            maxLength={5}
                            tabIndex={13}
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-lg-6">
                          <select
                            className="form-control autotab"
                            name="tabs1_7"
                            tabIndex={14}
                          >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <select
                            className="form-control autotab"
                            tabIndex={15}
                          >
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*END AUTOMATIC JUMP*/}
            {/*BEGIN MASKED INPUTS*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-bolt" />
                    </div>
                    <h5>Masked Inputs</h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a href="#">Link</a>
                        </li>
                        <li>
                          <a
                            className="accordion-toggle minimize-box"
                            data-toggle="collapse"
                            href="#div-4"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="div-4" className="accordion-body collapse in body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-lg-3">Date</label>
                        <div className="col-lg-5">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              data-mask="99/99/9999"
                            />
                            <span className="input-group-addon">
                              99/99/9999
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-3">Phone</label>
                        <div className="col-lg-5">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              data-mask="(999) 999-9999"
                            />
                            <span className="input-group-addon">
                              (999) 999-9999
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-3">
                          Product key
                        </label>
                        <div className="col-lg-5">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              data-mask="a*-999-a999"
                            />
                            <span className="input-group-addon">
                              a*-999-a999
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-3">Phone</label>
                        <div className="col-lg-5">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              data-mask="+33 999 999 999"
                            />
                            <span className="input-group-addon">
                              +33 999 999 999
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-3">
                          Percent
                        </label>
                        <div className="col-lg-5">
                          <div className="input-group">
                            <input
                              className="form-control"
                              type="text"
                              data-mask="99%"
                            />
                            <span className="input-group-addon">99%</span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*END MASKED INPUTS*/}
            {/* BEGIN COLOR PICKER */}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-edit" />
                    </div>
                    <h5>Color Picker</h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a
                            href="#colorPickerBlock"
                            data-toggle="collapse"
                            className="accordion-toggle minimize-box"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="close-box">
                            <i className="icon-remove" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div className="body collapse in" id="colorPickerBlock">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="cp1" className="control-label col-lg-4">
                          Field with hex format
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="#8fff00"
                            id="cp1"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cp2" className="control-label col-lg-4">
                          Field with the rgba format
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="rgb(0,194,255,0.78)"
                            id="cp2"
                            data-color-format="rgba"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cp3" className="control-label col-lg-4">
                          As component
                        </label>
                        <div className="col-lg-3">
                          <div className="input-group color">
                            <input
                              type="text"
                              className="form-control"
                              readOnly
                              data-color="rgb(255, 146, 180)"
                              data-color-format="rgb"
                              id="cp3"
                            />
                            <span
                              className="input-group-addon"
                              style={{ backgroundColor: "rgb(255, 146, 180)" }}
                            >
                              <i className="icon-home" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cp3" className="control-label col-lg-4">
                          Using events to work with the color
                        </label>
                        <div className="col-lg-3">
                          <a
                            href="#"
                            className="btn btn-danger"
                            id="cp4"
                            data-color-format="hex"
                            data-color="rgb(255, 255, 255)"
                          >
                            Change background color
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* END COLOR PICKER */}
            {/* BEGIN DATE PICKER */}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-calendar" />
                    </div>
                    <h5>Date Picker</h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a
                            href="#datePickerBlock"
                            data-toggle="collapse"
                            className="accordion-toggle minimize-box"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="close-box">
                            <i className="icon-remove" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="datePickerBlock" className="body collapse in">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-lg-4" htmlFor="dp1">
                          Field with the format specified via options
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="02-16-2012"
                            id="dp1"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4" htmlFor="dp2">
                          Field with the format specified via data tag
                        </label>
                        <div className="col-lg-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="02/16/12"
                            data-date-format="mm/dd/yy"
                            id="dp2"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          As component
                        </label>
                        <div className="col-lg-3">
                          <div
                            className="input-group input-append date"
                            id="dp3"
                            data-date="12-02-2012"
                            data-date-format="dd-mm-yyyy"
                          >
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="12-02-2012"
                              readOnly
                            />
                            <span className="input-group-addon add-on">
                              <i className="icon-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Start with years viewMode
                        </label>
                        <div className="col-lg-3">
                          <div
                            className="input-group input-append  date"
                            id="dpYears"
                            data-date="12-02-2012"
                            data-date-format="dd-mm-yyyy"
                            data-date-viewmode="years"
                          >
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="12-02-2012"
                              readOnly
                            />
                            <span className="input-group-addon add-on">
                              <i className="icon-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Limit the view mode to months
                        </label>
                        <div className="col-lg-3">
                          <div
                            className="input-group input-append  date"
                            id="dpMonths"
                            data-date="102/2012"
                            data-date-format="mm/yyyy"
                            data-date-viewmode="years"
                            data-date-minviewmode="months"
                          >
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="12-02-2012"
                              readOnly
                            />
                            <span className="input-group-addon add-on">
                              <i className="icon-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="body">
                          <p>
                            Attached to other element then field and using
                            events to work with the date values.
                          </p>
                          <div
                            className="alert alert-error"
                            id="alert"
                            style={{ display: "none" }}
                          >
                            <strong>Oh snap!</strong>
                            <p />
                          </div>
                          <table className="table">
                            <thead>
                              <tr>
                                <th>
                                  <a
                                    href="#"
                                    className="btn btn-default"
                                    id="dp4"
                                    data-date-format="yyyy-mm-dd"
                                    data-date="2012-02-20"
                                  >
                                    Start date
                                  </a>
                                </th>
                                <th>
                                  <a
                                    href="#"
                                    className="btn btn-default"
                                    id="dp5"
                                    data-date-format="yyyy-mm-dd"
                                    data-date="2012-02-25"
                                  >
                                    End date
                                  </a>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td id="startDate">2012-02-20</td>
                                <td id="endDate">2012-02-25</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* END DATE PICKER */}
            {/* BEGIN DATE RANGE PICKER */}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-calendar" />
                    </div>
                    <h5>Date Range Picker</h5>
                    <div className="toolbar">
                      <ul className="nav pull-right">
                        <li>
                          <a
                            href="#dateRangePickerBlock"
                            data-toggle="collapse"
                            className="accordion-toggle minimize-box"
                          >
                            <i className="icon-chevron-up" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="close-box">
                            <i className="icon-remove" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </header>
                  <div id="dateRangePickerBlock" className="body collapse in">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label
                          className="control-label col-lg-4"
                          htmlFor="reservation"
                        >
                          Reservation dates
                        </label>
                        <div className="col-lg-4">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="icon-calendar" />
                            </span>
                            <input
                              type="text"
                              name="reservation"
                              id="reservation"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label
                          className="control-label col-lg-4"
                          htmlFor="reportrange"
                        >
                          Pre-defined Ranges &amp; Callback
                        </label>
                        <div className="col-lg-4">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="icon-calendar" />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="02-16-2012"
                              id="reportrange"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*END DATE RANGE PICKER */}
            {/* BEGIN TIME PICKER */}
            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <header>
                    <div className="icons">
                      <i className="icon-time" />
                    </div>
                    <h5>Time Picker</h5>
                  </header>
                  <div className="body">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          Default Timepicker
                        </label>
                        <div className="col-lg-3">
                          <div className="input-group bootstrap-timepicker">
                            <input
                              className="form-control timepicker-default"
                              type="text"
                            />
                            <span className="input-group-addon add-on">
                              <i className="icon-time" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-4">
                          24hr Timepicker
                        </label>
                        <div className="col-lg-3">
                          <div className="input-group bootstrap-timepicker">
                            <input
                              className="timepicker-24 form-control"
                              type="text"
                            />
                            <span className="input-group-addon add-on">
                              <i className="icon-time" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* END TIME PICKER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
    </div>
  );
}

export default Add_emp;

// {/* MENU SECTION */}
// <div id="left">
// <div className="media user-media well-small">
//   <NavLink className="user-link" to="#">
//     <img
//       className="media-object img-thumbnail user-img"
//       alt="User Picture"
//       src="assets/img/user.gif"
//     />
//   </NavLink>
//   <br />
//   <div className="media-body">
//     <h5 className="media-heading"> Joe Romlin</h5>
//     <ul className="list-unstyled user-info">
//       <li>
//         <NavLink
//           className="btn btn-success btn-xs btn-circle"
//           style={{ width: 10, height: 12 }}
//         />{" "}
//         Online
//       </li>
//     </ul>
//   </div>
//   <br />
// </div>
// <ul id="menu" className="collapse">
//   <li className="panel active">
//     <NavLink to="/">
//       <i className="icon-table" /> Dashboard
//     </NavLink>
//   </li>

//   <li className>
//     <NavLink to="/add_emp">
//       <i className="icon-angle-right" /> Advance Form{" "}
//     </NavLink>
//   </li>

//   <li>
//     <NavLink to="/manage_emp">
//       <i className="/manage-user" /> Data Tables{" "}
//     </NavLink>
//   </li>

//   <li>
//     <NavLink to="/login">
//       <i className="icon-signin" /> Login Page{" "}
//     </NavLink>
//   </li>
// </ul>
// </div>
// {/*END MENU SECTION */}
