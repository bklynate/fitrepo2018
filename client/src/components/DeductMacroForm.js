import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deductMacro } from '../actions';

class DeductMacroForm extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    const macrograms = this.refs.macrograms.value;
    const { macroType } = this.props;
    if (macrograms.match(/^[0-9]*$/) && macrograms !== '') {
      this.refs.macrograms.value = '';
      const macroAmount = {macroAmount: parseInt(macrograms, 10)};
      this.props.deductMacro({ macroAmount, macroType });
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

export default connect(null, { deductMacro })(DeductMacroForm);
