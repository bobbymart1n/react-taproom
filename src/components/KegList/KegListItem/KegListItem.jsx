import React from 'react';
import PropTypes from 'prop-types';
import styles from './KegListItem.css';
import SellPintButton from './../SellPintButton/SellPintButton';
import arrow from './../../../images/angle-down-solid.svg';

class KegListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pints: 124,
      showDetails: false
    };
    this.handleSellingPints = this.handleSellingPints.bind(this);
    this.handleShowDetails = this.handleShowDetails.bind(this);
  }
  handleSellingPints() {
    let newPints = this.state.pints;
    newPints--;
    this.setState({pints: newPints});
  }
  handleShowDetails() {
    this.setState(prevState => ({showDetails: !prevState.showDetails}));
  }
  render() {
    const pintRemaining = {
      width: this.state.pints + '%',
    };
    return (
      <div className={styles.kegListItem} onClick={this.handleShowDetails}>
        <div className={styles.kegName}>
          <div className={styles.kegNameAndButton}>
            {this.props.name}
            <span><SellPintButton onSellingPint={this.handleSellingPints}/></span>
          </div>
          <img src={arrow} />
          <div style={pintRemaining} className={styles.pintsRemaining}>
          </div>
        </div>
        {this.state.showDetails === true ? <ul>
          <li><span>Brewer:</span> {this.props.brewer}</li>
          <li><span>Description:</span> {this.props.description}</li>
          <li><span>ABV:</span> {this.props.abv}</li>
          <li><span>Price:</span> ${this.props.price}</li>
          <li><span>Pints Remaining:</span> {this.state.pints}</li>
        </ul> : null}
      </div>
    );
  }
}

KegListItem.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default KegListItem;
