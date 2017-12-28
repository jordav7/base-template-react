import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SubTreeView from './SubTreeView';

export default class TreeView extends Component {

    static defaultProps = {
        id: null,
        value: null,
        className: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        className: PropTypes.string
    }

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
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

    toggle(e) {
        console.log('Entra a toggle');
        console.log(e.target.parentNode);
        if(e.target.parentNode.classList.contains('menu-open')) {
            e.target.parentNode.classList.remove('menu-open');
        } else {
            e.target.parentNode.classList.add('menu-open');
        }
    }

    renderLink(val) {
        if (val.children && val.children.length > 0) {
            return <a >
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
        let className = classNames('treeview');     
       
        return (      
            this.props.value.map((val, i) => {
                return (
                    <li key={i + '_treeMenuView'} className={className} onClick={this.toggle}>
                        {this.renderLink(val)}
                        {this.renderSubmenu(val)}
                    </li>
                    )
                }
            )
        );
    }
}
