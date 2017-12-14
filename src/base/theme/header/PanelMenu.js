import React, { Component } from 'react'

export default class PanelMenu extends Component {
    render() {
        return (
            <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt={"User"} />
                    <span className="hidden-xs">Alexander Pierce</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="user-header">
                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt={"User"} />

                        <p>
                            Alexander Pierce - Web Developer
                    <small>Member since Nov. 2012</small>
                        </p>
                    </li>

                    <li className="user-body">
                        <div className="row">
                            <div className="col-xs-4 text-center">
                                <a >Followers</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a >Sales</a>
                            </div>
                            <div className="col-xs-4 text-center">
                                <a >Friends</a>
                            </div>
                        </div>

                    </li>

                    <li className="user-footer">
                        <div className="pull-left">
                            <a className="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div className="pull-right">
                            <a className="btn btn-default btn-flat">Sign out</a>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }
}
