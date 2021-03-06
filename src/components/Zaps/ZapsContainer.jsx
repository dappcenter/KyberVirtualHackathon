import React, { PureComponent } from 'react';
import autobind from 'react-autobind';
import isEmpty from 'lodash/isEmpty';

import ZapsView from './ZapsView';
import Zaps from '../../constants/Zaps';

class ZapsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      basketData: {}
    };
    autobind(this);
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    this.setState({ id });
    const basketData = Zaps[id];
    if (!isEmpty(basketData)) {
      this.setState({ basketData });
    }
  };

  render() {
    const { basketData } = this.state;
    return <ZapsView basketData={basketData} />;
  }
}

export default ZapsContainer;
