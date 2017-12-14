import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubTreeView from './SubTreeView';

export default class TreeView extends Component {

    static defaultProps = {
        id: null,
        value: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array
    }

    constructor() {
        super();
        this.showMenu = this.showMenu.bind(this);
    }

    renderIconBar(val) {
        let icon = (val.children && val.children.length > 0) ? (<span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>) : null;
        return icon;
    }

    renderSubmenu(val) {
        let subMenu = (val.children && val.children.length > 0) ? <SubTreeView value={val.children}/> : null;
        return subMenu;
    }

    showMenu() {

    }

    renderLink(val) {
        if (val.children && val.children.length > 0) {
            return <a onClick={this.showMenu}>
                        <i className="fa fa-share"></i> <span>{val.label}</span>
                        {this.renderIconBar(val)}        
                    </a>
        } else {
            return <a>
                        <i className="fa fa-share"></i> <span>{val.label}</span>
                        {this.renderIconBar(val)}        
                    </a>
        }
    }

    render() {  
        return (      
            this.props.value.map((val, i) => {
                return (
                    <li key={i + '_treeMenuView'} className="treeview">
                        {this.renderLink(val)}
                        {this.renderSubmenu(val)}
                    </li>
                    )
                }
            )
        );
    }
}
