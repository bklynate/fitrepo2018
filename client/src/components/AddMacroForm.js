import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMacro } from '../actions';

class AddMacroForm extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    const { value: macrograms } = this.refs.macrograms;
    const { macroType } = this.props;
    if (macrograms.match(/^[0-9]*$/) && macrograms !== '') {
      this.refs.macrograms.value = '';
      const macroAmount = { macroAmount: parseInt(macrograms, 10) };
      this.props.addMacro({ macroAmount, macroType });
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

export default connect(null, { addMacro })(AddMacroForm);
