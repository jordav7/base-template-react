import React, { Component } from 'react'

export default class HeaderToogle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseScreenSize   : 767,
            expandOnHover        : false,
            expandTransitionDelay: 1500,
            classNames: {
                collapsed    : 'sidebar-collapse',
                open         : 'sidebar-open',
                mini         : 'sidebar-mini',
                expanded     : 'sidebar-expanded-on-hover',
                expandFeature: 'sidebar-mini-expand-feature',
                layoutFixed  : 'fixed'
            }
        }
        this.pushMenu = this.pushMenu.bind(this);
        this.contentWrapper = this.contentWrapper.bind(this);
        this.init();
    }

    init() {
        if (this.state.expandOnHover || document.body.classList.contains('sidebar-mini.fixed')) {
            this.expandOnHover();
             document.body.classList.add(this.state.classNames.expandFeature);
             document.getElementsByClassName('content-wrapper')[0].addEventListener('click', this.contentWrapper, false);
        }
    }

    expandOnHover() {

    }

    pushMenu(event) {
        event.preventDefault();
        let width = this.getWidth();
        let isOpen = !document.body.classList.contains(this.state.classNames.collapsed);
        if (width <= this.state.collapseScreenSize) {
            isOpen = document.body.classList.contains(this.state.classNames.open);
        }

        if (!isOpen) {
            this.open();
        } else {
            this.close();
        }
    }

    open() {
        let width = this.getWidth();
        if (width > this.state.collapseScreenSize) {
            document.body.classList.remove(this.state.classNames.collapsed);
        } else {
            document.body.classList.add(this.state.classNames.open);
        }
        //this.expand();
    }

    close() {
        let width = this.getWidth();
        if (width > this.state.collapseScreenSize) {
            document.body.classList.add(this.state.classNames.collapsed);
        } else {
            document.body.classList.remove(this.state.classNames.open, this.state.classNames.collapsed);
        }
        this.collapse();
    }

    expand() {
        setTimeout(() => {
            document.body.classList.remove(this.state.classNames.collapsed);
            document.body.classList.add(this.state.classNames.expanded);
        }, this.state.expandTransitionDelay);
    }

    collapse() {
        setTimeout(() => {
            document.body.classList.remove(this.state.classNames.expanded);
            document.body.classList.add(this.state.classNames.collapsed);
        }, this.state.expandTransitionDelay);
    }

    getWidth() {
        return window.innerWidth;
    }

    contentWrapper() {
        if (window.innerWidth <= this.state.collapseScreenSize && document.body.classList.contains('sidebar-open')) {
            this.close();    
        }
    }

    render() {
        return (
            <a className="sidebar-toggle" onClick={this.pushMenu} role="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </a>
        )
    }
}
