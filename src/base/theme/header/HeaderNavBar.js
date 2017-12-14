import React, { Component } from 'react';
import HeaderToggle from './HeaderToggle';
import MessagesMenu from './MessagesMenu';
import NotificationsMenu from './NotificationsMenu';
import TaskMenu from './TaskMenu';
import PanelMenu from './PanelMenu';

export default class HeaderNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-static-top">
                <HeaderToggle />
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <MessagesMenu/>
                        <NotificationsMenu/>
                        <TaskMenu/>
                        <PanelMenu/>

                        <li>
                            <a data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
