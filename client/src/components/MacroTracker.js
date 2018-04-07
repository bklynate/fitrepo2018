import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMacros, fetchUser } from '../actions';

import Counter from './Counter';
import AddMacroForm from './AddMacroForm';
import DeductMacroForm from './DeductMacroForm';

class MacroTracker extends Component {

  componentDidMount() {
    this.props.fetchMacros();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.macros.carbCount === this.props.macros.carbCount) return;
    if (prevProps.macros.fatCount === this.props.macros.fatCount) return;
    if (prevProps.macros.proteinCount === this.props.macros.proteinCount) return;
    this.props.fetchMacros();
  }

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
          proteinCount: this.props.macros.proteinCount - amount,
        }));
      case 'carb':
        return this.setState(() => ({
          carbCount: this.props.macros.carbCount - amount,
        }));
      case 'fat':
        return this.setState(() => ({
          fatCount: this.props.macros.fatCount - amount,
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
              macroCount={this.props.macros.proteinCount}
            />
            {this.props.macros.proteinCount <= 0 ? (
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
            <Counter macroTitle={'Carb'} macroCount={this.props.macros.carbCount} />
            {this.props.macros.carbCount <= 0 ? (
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
            <Counter macroTitle={'Fat'} macroCount={this.props.macros.fatCount} />
            {this.props.macros.fatCount <= 0 ? (
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
    const { user: { displayName } } = this.props
    return (
      <div className="macroTrackerDiv">
        <div>
          <p>Hi, { displayName }!</p>
        </div>
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

const mapStateToProps = ({ macros = {} }) => ({
  macros,
});

export default connect(mapStateToProps, { fetchMacros, fetchUser })(MacroTracker);
