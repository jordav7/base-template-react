import React, { Component } from 'react';
import TreeView from './TreeView';

export default class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
            menus: [
                {label: 'Nuevo Item'},
                {
                    label: 'Nuevo Item',
                    children:[
                        {
                            label: 'SubItem1',
                            children:[
                                {
                                    label: 'SubSubItem1'
                                },
                                {
                                    label: 'SubSubItem2',
                                    children: [
                                        {
                                            label: 'SubSubSubItem1'
                                        }
                                    ]
                                },
                                {
                                    label: 'SubSubItem3'
                                }
                            ]
                        },
                        {
                            label: 'SubItem2'
                        }
                    ]
                },
                {label: 'Nuevo Item'}
            ]
        }
    }

    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                        <img src={process.env.PUBLIC_URL + '/app/img/user2-160x160.jpg'} className="img-circle" alt="User" />
                        </div>
                        <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a ><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>            
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
                    </form>                        
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../../index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                <li><a href="../../index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-files-o"></i>
                                <span>Layout Options</span>
                                <span className="pull-right-container">
                                <span className="label label-primary pull-right">4</span>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                <li><a href="../layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                <li><a href="../layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                <li><a href="../layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../widgets.html">
                                <i className="fa fa-th"></i> <span>Widgets</span>
                                <span className="pull-right-container">
                                <small className="label pull-right bg-green">new</small>
                                </span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-pie-chart"></i>
                                <span>Charts</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                                <li><a href="../charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                <li><a href="../charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                <li><a href="../charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                <li><a href="../UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                <li><a href="../UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                <li><a href="../UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                <li><a href="../UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                <li><a href="../UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                            </ul>
                        </li>
                        <li className="treeview active">
                            <a >
                                <i className="fa fa-edit"></i> <span>Forms</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                <li className="active"><a href="advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                <li><a href="editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-table"></i> <span>Tables</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                                <li><a href="../tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="../calendar.html">
                                <i className="fa fa-calendar"></i> <span>Calendar</span>
                                <span className="pull-right-container">
                                <small className="label pull-right bg-red">3</small>
                                <small className="label pull-right bg-blue">17</small>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="../mailbox/mailbox.html">
                                <i className="fa fa-envelope"></i> 
                                <span>Mailbox</span>
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-yellow">12</small>
                                    <small className="label pull-right bg-green">16</small>
                                    <small className="label pull-right bg-red">5</small>
                                </span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-folder"></i> <span>Examples</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="../examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                                <li><a href="../examples/profile.html"><i className="fa fa-circle-o"></i> Profile</a></li>
                                <li><a href="../examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                                <li><a href="../examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                                <li><a href="../examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                                <li><a href="../examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                                <li><a href="../examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                                <li><a href="../examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                                <li><a href="../examples/pace.html"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a >
                                <i className="fa fa-share"></i> <span>Multilevel</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a ><i className="fa fa-circle-o"></i> Level One</a></li>
                                <li className="treeview">
                                    <a >
                                        <i className="fa fa-circle-o"></i> Level One
                                        <span className="pull-right-container">
                                            <i className="fa fa-angle-left pull-right"></i>
                                        </span>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li>
                                            <a >
                                                <i className="fa fa-circle-o"></i> Level Two
                                            </a>
                                        </li>
                                        <li className="treeview">
                                            <a >
                                                <i className="fa fa-circle-o"></i> Level Two
                                                <span className="pull-right-container">
                                                    <i className="fa fa-angle-left pull-right"></i>
                                                </span>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a ><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                <li><a ><i className="fa fa-circle-o"></i> Level Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a ><i className="fa fa-circle-o"></i> Level One</a></li>
                            </ul>
                        </li>
                        <li><a href="https://adminlte.io/docs"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                        <TreeView value={this.state.menus}/>
                        <li className="header">LABELS</li>
                        <li><a ><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                        <li><a ><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                        <li><a ><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul>
                </section>
            </aside>

        )
    }
}
