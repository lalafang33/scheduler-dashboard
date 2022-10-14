import React, {Component} from "react"; 

export default class Panel extends Component {
  render() {
    const { id, label, value, onSelect} = this.props;

    return (
      <section
        className="dashboard__panel"
        onClick={onSelect}
        // onClick={event => onSelect(id)}
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}