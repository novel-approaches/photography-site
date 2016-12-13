'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { modifyGridMargins, modifyGridSize } from '../../actions/index';
import GridControlsSizeGlyph from '../../constants/svg/GridControlsSizeGlyph_SVG';
import GridControlsMarginsGlyph from '../../constants/svg/GridControlsMarginsGlyph_SVG';


class GridControls extends Component {
  constructor(props) {
    super(props);
    this.onSlideMarginsRange = this.onSlideMarginsRange.bind(this);
    this.onSlideSizeRange = this.onSlideSizeRange.bind(this);
  }

  onSlideMarginsRange(evt, outputTarg) {
    this.props.modifyGridMargins(evt.target.value);
  }

  onSlideSizeRange(evt, outputTarg) {
    this.props.modifyGridSize(evt.target.value);
  }

  render() {
    return(
      <form name="grid-form">
        <fieldset>
          <label
            htmlFor="size-inpt"
            title="Photo size">
            <GridControlsSizeGlyph />
          </label>
          <input
            id="size-inpt"
            className="vrange"
            type="range"
            min={ 100 }
            max={ Math.max(500, Math.floor(window.innerHeight / 2.5)) }
            step={ 5 }
            defaultValue={ 300 }
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
            htmlFor="margin-inpt"
            title="Photo margins">
            <GridControlsMarginsGlyph />
          </label>
          <input
            id="margin-inpt"
            className="vrange"
            type="range"
            min={ 2 }
            max={ 75 }
            step={ 1 }
            defaultValue={ 10 }
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
