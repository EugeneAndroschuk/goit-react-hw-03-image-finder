import React from 'react';
import css from './Button.module.css';

class Button extends React.Component {
  state = {
    pageSearch: 1,
  };

  componentDidMount() {
    this.setState({ pageSearch: this.props.page });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageSearch !== this.state.pageSearch)
      this.props.onClickLoadMore(this.state.pageSearch);
    if (this.props.page - prevProps.page < 0) this.setState({ pageSearch: 1 });
  }

  handleClick = () => {
    this.setState(prevState => ({ pageSearch: prevState.pageSearch + 1 }));
  };

  render() {
    return (
      <button className={css.Button} type="button" onClick={this.handleClick}>
        Load more
      </button>
    );
  }
}

export default Button;
