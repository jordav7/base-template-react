import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SubTreeView extends Component {

    static defaultProps = {
        id: null,
        value: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array
    }

    renderTreeMenu() {
        this.props.value.map((val, i) => {
            return <li key={i + '_subTreeMenuView'} className="treeview">
                        <a >
                            <i className="fa fa-share"></i> <span>{val.label}</span>
                            {this.renderIconBar(val)}        
                        </a>
                        {this.renderChildren(val)}               
                    </li>
        });
    }

    renderIconBar(val) {
        let icon = (val.children && val.children.length > 0) ? (<span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>) : null;
        return icon;
    }

    renderSubMenu(menu) {
        return (<SubTreeView value={menu.children}/>);
    }

    renderChildren(menu) {
        let submenu = (menu.children && menu.children.length > 0) ? this.renderSubMenu(menu) : null;
        return submenu;
    }

    render() {
        return (
            <ul className="treeview-menu">
                {this.renderTreeMenu()}
            </ul>
        );
    }
}
