import React, { Component } from 'react';

class DeductMacroForm extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    const macrograms = this.refs.macrograms.value;

    if (macrograms.match(/^[0-9]*$/) && macrograms !== '') {
      this.refs.macrograms.value = '';
      this.props.onMacroDeduct(parseInt(macrograms, 10), this.props.macroType);
    }
  };

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            ref="macrograms"
            placeholder="Input macro in grams"
          />
          <button className="waves-effect waves-light btn">
            Deduct Macros
          </button>
        </form>
      </div>
    );
  }
}

export default DeductMacroForm;
