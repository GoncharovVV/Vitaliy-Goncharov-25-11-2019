import React, { Component } from 'react';
import { ReactComponent as Cloudy } from '../../assets/icons/cloudy.svg';
import './ErrorBoundry.scss';
export interface ErrorBoundryProps {}

export interface ErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error__holder">
          <div className="error__icon">
            <Cloudy className="svg-icon" />
          </div>
          Something wrong!
          <strong>Please try later</strong>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
