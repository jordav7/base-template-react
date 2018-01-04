import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

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

    renderSubmenu() {
        return this.props.value.map((val, i) => {            
            return <MenuItem key={i + '_subTreeItem'} value={val}/>               
        });
        
    }

    render() {                
        let opened = this.props.opened;
        let style = {};        
        style = Object.assign(style, {display: opened ? 'block' : 'none'});
        return (
            <ul className="treeview-menu" style={style}>
                {this.renderSubmenu()}
            </ul>
        );
    }
}
