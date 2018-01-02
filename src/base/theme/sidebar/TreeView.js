import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem'

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

    render() {         
        return (      
            this.props.value.map((val, i) => {
                return (
                    <MenuItem key={i + '_treeMenuItem'} value={val}/>
                    )
                }
            )
        );
    }
}
