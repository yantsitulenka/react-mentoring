import React from 'react';
import movies from '../../data/data';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError || !Array.isArray(movies)) {
      return (
        <div className="container">
          <h1>Something went wrong. Please try again later</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
