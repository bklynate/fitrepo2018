import React, { Component } from 'react';

import Counter from './Counter';
import AddMacroForm from './AddMacroForm';
import DeductMacroForm from './DeductMacroForm';

const count = `${40}%`;

class MacroTracker extends Component {
  state = {
    proteinCount: 0,
    isThereProtein: false,
    fatCount: 0,
    isThereFat: false,
    carbCount: 0,
    isThereCarbs: false,
  };

  handleOnMacroAdd = (amount, macroType) => {
    switch (macroType) {
      case 'protein':
        return this.setState(() => ({ proteinCount: amount }));
      case 'carb':
        return this.setState(() => ({ carbCount: amount }));
      case 'fat':
        return this.setState(() => ({ fatCount: amount }));
      default:
        return 0;
    }
  };

  handleOnMacroDeduct = (amount, macroType) => {
    switch (macroType) {
      case 'protein':
        return this.setState(() => ({
          proteinCount: this.state.proteinCount - amount,
        }));
      case 'carb':
        return this.setState(() => ({
          carbCount: this.state.carbCount - amount,
        }));
      case 'fat':
        return this.setState(() => ({
          fatCount: this.state.fatCount - amount,
        }));
      default:
        return 0;
    }
  };

  renderMacroArea = macroType => {
    switch (macroType) {
      case 'protein':
        return (
          <div>
            <Counter
              macroTitle={'Protein'}
              macroCount={this.state.proteinCount}
            />
            {this.state.proteinCount <= 0 ? (
              <AddMacroForm
                onMacroAdd={this.handleOnMacroAdd}
                macroType={'protein'}
              />
            ) : (
              <DeductMacroForm
                onMacroDeduct={this.handleOnMacroDeduct}
                macroType={'protein'}
              />
            )}
          </div>
        );
      case 'carb':
        return (
          <div>
            <Counter macroTitle={'Carb'} macroCount={this.state.carbCount} />
            {this.state.carbCount <= 0 ? (
              <AddMacroForm
                onMacroAdd={this.handleOnMacroAdd}
                macroType={'carb'}
              />
            ) : (
              <DeductMacroForm
                onMacroDeduct={this.handleOnMacroDeduct}
                macroType={'carb'}
              />
            )}
          </div>
        );
      case 'fat':
        return (
          <div>
            <Counter macroTitle={'Fat'} macroCount={this.state.fatCount} />
            {this.state.fatCount <= 0 ? (
              <AddMacroForm
                onMacroAdd={this.handleOnMacroAdd}
                macroType={'fat'}
              />
            ) : (
              <DeductMacroForm
                onMacroDeduct={this.handleOnMacroDeduct}
                macroType={'fat'}
              />
            )}
          </div>
        );
      default:
        return 0;
    }
  };

  render() {
    return (
      <div className="macroTrackerDiv">
        <div className="row">
          <div className="col s12 m4">
            <div className="counterAndFormArea">
              {this.renderMacroArea('protein')}
            </div>
          </div>
          <div className="col s12 m4">
            <div className="counterAndFormArea">
              {this.renderMacroArea('carb')}
            </div>
          </div>
          <div className="col s12 m4">
            <div className="counterAndFormArea">
              {this.renderMacroArea('fat')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MacroTracker;
