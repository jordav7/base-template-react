import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubTreeView from './SubTreeView';

export default class MenuItem extends Component {

    static defaultProps = {
        id: null,
        value: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        e.preventDefault();
        console.log('Entra a toggle');        
        if (this.state.open) {
            this.setState({open: false});
        } else {
            this.setState({open: true});
        }
        
    }

    renderIconBar(val) {
        let icon = (val.children && val.children.length > 0) ? (<span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>) : null;
        return icon;
    }

    renderLink(val) {
        if (val.children && val.children.length > 0) {
            return <a onClick={this.toggle}>
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

    renderSubmenu(val, open) {
        let subMenu = (val.children && val.children.length > 0) ? <SubTreeView value={val.children} opened={open}/> : null;
        return subMenu;
    }

    render() {
        let className = classNames('treeview', {'menu-open': this.state.open});         
        return (
            <li className={className}>
                {this.renderLink(this.props.value)}
                {this.renderSubmenu(this.props.value, this.state.open)}
            </li>
        )
    }
}
