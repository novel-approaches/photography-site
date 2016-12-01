'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  modifyGridMargins,
  modifyGridSize
} from '../actions/index';


class GridControls extends Component {
  constructor(props) {
    super(props);
    // this.onSlide = this.onSlide.bind(this);
    this.onSlideMarginsRange = this.onSlideMarginsRange.bind(this);
    this.onSlideSizeRange = this.onSlideSizeRange.bind(this);
  }

  onSlideMarginsRange(evt, outputTarg) {
    // outputTarg.value = evt.target.value;
    this.props.modifyGridMargins(evt.target.value);
  }

  onSlideSizeRange(evt, outputTarg) {
    // outputTarg.value = evt.target.value
    this.props.modifyGridSize(evt.target.value);
  }

  render() {
    return(
      <form name="grid-form">
        <fieldset>
          <label
            htmlFor="size-inpt">
            Size:&nbsp;
          </label>
          <input
            id="size-inpt"
            className="vrange"
            type="range"
            min={ 50 }
            max={ Math.floor(window.innerHeight / 3) }
            step={ 10 }
            defaultValue={ 300 }
            // onChange={ (evt) => this.onSlide(evt, ReactDOM.findDOMNode(this.refs.sizeOutput)) } />
            onChange={ this.onSlideSizeRange } />
          <output
            htmlFor="size-inpt"
            name="size-output"
            ref="sizeOutput">
            { this.props.gridSize }
          </output>
        </fieldset>
        
        <fieldset>
          <label
            htmlFor="margin-inpt">
            Margins:&nbsp;
          </label>
          <input
            id="margin-inpt"
            className="vrange"
            type="range"
            min={ 0 }
            max={ 75 }
            step={ 1 }
            defaultValue={ 15 }
            // onChange={ (evt) => this.onSlide(evt, ReactDOM.findDOMNode(this.refs.marginOutput)) } />
            onChange={ this.onSlideMarginsRange } />
          <output
            htmlFor="margin-inpt"
            name="margin-output"
            ref="marginOutput">
            { this.props.gridMargins }
          </output>
        </fieldset>
      </form>
    );
  }
};

let mapStateToProps = (state) => ({ 
  gridMargins: state.gridMargins,
  gridSize: state.gridSize
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  modifyGridMargins,
  modifyGridSize
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GridControls);
