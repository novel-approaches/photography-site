'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';


class OrderFormModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="order-form">
        <Modal />
      </div>
    );
  }
};

let mapStateToProps = (state) => ({

});

// export default ThumbnailsMap;
export default connect(mapStateToProps)(OrderFormModal);
