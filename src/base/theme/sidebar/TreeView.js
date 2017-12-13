import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TreeView extends Component {

    static defaultProps = {
        id: null,
        value: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array
    }

    render() {        
        this.props.value.map((val, i) => {
            return (
                <li key={i + '_treeMenuView'} className="treeview">
                    <a >
                        <i className="fa fa-share"></i> <span>Multilevel</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li>
                            <a>
                                <i className="fa fa-circle-o"></i> Level One
                            </a>
                        </li>
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
                        <li>
                            <a >
                                <i className="fa fa-circle-o"></i> Level One
                            </a>
                        </li>
                    </ul>
                </li>
                )
            }
        )
        
    }
}
