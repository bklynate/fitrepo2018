import React, { Component } from 'react';

class AddMacroForm extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    const macrograms = this.refs.macrograms.value;

    if (macrograms.match(/^[0-9]*$/) && macrograms !== '') {
      this.refs.macrograms.value = '';
      this.props.onMacroAdd(parseInt(macrograms, 10), this.props.macroType);
    }
  };

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            ref="macrograms"
            placeholder="Deduct your macro count"
          />
          <button className="waves-effect waves-light btn">Adds Macros</button>
        </form>
      </div>
    );
  }
}

export default AddMacroForm;
