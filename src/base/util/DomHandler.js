import React, { Component } from 'react'

export default class DomHandler {

    getElementByClassName(nameClass) {
        let elementClass = document.getElementsByClassName(nameClass)[0];
        return elementClass;
    }
}
