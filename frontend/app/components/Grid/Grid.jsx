'use strict';
import React, { Component } from 'react';

import GridItem from './GridItem';
import ScrollHandler from './ScrollHandler';


export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.resizeTimeout = null;
    this.state = {
      items: ( props.order ? Array(props.items.length).fill(null) : [] ),
      itemWidth: 0
    };
  }

  getChildContext() {
    return { debug: this.props.debug };
  }

  componentWillMount() {
    this.loadItems();
  }

  componentDidMount() {
    this.setContainerWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.setContainerWidth);
  }

  componentWillReceiveProps(nextProps) {
    let flag = false;
    for (let i = 0; i < nextProps.items.length; i++) {
      let [currItem, nextItem] = [this.props.items[i], nextProps.items[i]];
      if (currItem && nextItem.url !== currItem.url) { flag = true; }
    }
    if (flag) { this.loadItems(nextProps); }
  }

  loadItems(props = this.props) {
    if (this.props.debug) { console.debug('Load items', props.items); }
    let promises = props.items.map((item, i) => this
      .loadItem(item, i)
      .then(::this.addMedia)
      .then(::this.setContainerWidth)
    );

    Promise.all(promises).then(images => {
      if (this.props.success) { this.props.success(); }
      if (this.props.debug) { console.debug('All images loaded!'); }
    });
  }

  setContainerWidth() {
    if (this.refs.photoGrid) {
      let offsetWidth = this.refs.photoGrid.offsetWidth;
      if (offsetWidth !== this.state.itemWidth) {
        if (this.props.debug) { console.debug(`Setting container width: ${offsetWidth}`); }
        this.setState({ itemWidth: offsetWidth });
      }
    }
  }

  loadItem(item, i) {
    return item.element
      ? this.loadElement(item, i) : this.isImage(item.url)
      ? this.loadImage(item, i) : this.loadVideo(item, i);
  }

  loadElement(item, i) {
    return new Promise((resolve, reject) => {
      item.type = 'element';
      resolve({ item, i });
    });
  }

  loadVideo(item, i) {
    item.type = 'video';
    return new Promise((resolve, reject) => {
      let video = document.createElement('video');
      video.addEventListener('loadedmetadata', (evt) => {
        [item.width, item.height] = [video.videoWidth, video.videoHeight];
        resolve({ item, i });
      }, false);
      [video.src, item.media] = [item.url, video];
    });
  }

  loadImage(item, i) {
    item.type = 'image'
    return new Promise((resolve, reject) => {
      let image = new Image();
      [image.src, item.media] = [item.url, image];
      item.width && item.height
        ? resolve({ item, i })
        : image.onload = (evt) => {
          [item.width, item.height] = [image.width, image.height];
          resolve({ item, i });
        };
    });
  }

  isImage(url) {
    const extensions = ['png', 'jpg', 'jpeg', 'gif'],
          regTest = new RegExp(`\\.${extensions.join('|\\.')}`);
    return regTest.test(url)
  }

  addMedia({ item, i }) {
    let items = this.state.items.concat([]); // TODO: use react-addons-update instead
    item.ratio = (item.width / item.height);
    this.props.order
      ? items[i] = item
      : items.push(item);
    this.setState({ items });
    return item;
  }

  calculateHeight(items) {
    let [ratioSum, { itemWidth }, { margins }] = [0, this.state, this.props];
    itemWidth -= (items.length + 1) * margins;
    ratioSum = items.reduce((memo, curr) => memo += (curr.width / curr.height), 0);
    return (itemWidth / ratioSum);
  }

  render() {
    let [{ items, itemWidth }, { maxHeight, margins, loadingComponent }] = [this.state, this.props];
    items = items.filter((item) => { return item !== null });

    if (!items.length || !this.state.itemWidth) {
      return (
        <div
          className="grid"
          ref="photoGrid" >
          { loadingComponent ? loadingComponent : null }
        </div>
      );
    }

    let [gridItems, imagesRow, rows, rowHeight, row, slice] = [ [], [], [], 0, , ];
    w: while (items.length > 0) {
      for (let i = 1; i < items.length + 1; ++i) {
        slice = items.slice(0, i);
        rowHeight = this.calculateHeight(slice);
        if (rowHeight < maxHeight) {
          rows.push({ rowHeight, slice });
          items = items.slice(i);
          continue w;
        }
      }
      rows.push({
        rowHeight: Math.min(maxHeight, rowHeight),
        slice
      });
      break;
    }

    rows.forEach((row, i) => {
      row.slice.forEach((item, j) => {
        gridItems.push(
          <GridItem
            key={ `GridItem_(${i}.${j})` }
            path={ item.url }
            itemHeight={ row.rowHeight }
            selectPhoto={ this.props.selectPhoto }
            setClassName={ this.props.setClassName }
            domain="cloudinary.com"
            margins={ margins }
            photo={ item }
            nativeDimensions={ `${item.width} x ${item.height} px` }
            {...item} />
        );
      })
    });

    return (
      <div
        className="grid"
        ref="photoGrid"
        style={{ padding: `${margins / 2}px` }}>
        <ScrollHandler
          onResize={::this.setContainerWidth} />
        { gridItems }
      </div>
    );
  }
};


Grid.childContextTypes = { debug: React.PropTypes.bool };
Grid.defaultProps = {
  margins: 0,
  order: true,
  maxHeight: 300,
  debug: false
};
