import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SubTreeView extends Component {

    static defaultProps = {
        id: null,
        value: [],
        opened: false
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        opened: PropTypes.bool
    }

    

    render() {        
        console.log(this.props.value);
        let opened = this.props.opened;
        let style = {};
        if (opened) {
            style = Object.assign(style, {display: 'block'});
        } else {
            style = Object.assign(style, {display: 'none'});
        }
        return (
            <ul className="treeview-menu" style={style}>
                <ListMenu value={this.props.value} />
            </ul>
        );
    }
}

class ListMenu extends Component {
    static defaultProps = {
        id: null,
        value: []
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array
    }
    
    renderTreeMenu() {
        console.log(console.log('Tamano submenu::'+this.props.value.length));
        
    }

    renderIconBar(val) {
        let icon = (val.children && val.children.length) ? (<span className="pull-right-container">
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
        return this.props.value.map((val, i) => {
            console.log('Ingreso a renderizar submenu');
            let subtreeMenu = (<li key={i + '_subTreeMenuView'} className="treeview">
                <a >
                    <i className="fa fa-share"></i> <span>{val.label}</span>
                    {this.renderIconBar(val)}        
                </a>
                {this.renderChildren(val)}               
            </li>);            
            return subtreeMenu;
        });
        
    }
}

