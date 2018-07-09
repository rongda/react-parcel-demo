import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions';

@connect(
  state => ({
    token: state.token
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)

class App extends React.Component{
  render() {
    console.log(this.props)
    const { token, logout } = this.props;
    const authComponnet = <Redirect to='/auth'></Redirect>
    const basicComponent = (
      <div>
        <button onClick={logout}>退出</button>
        <hr/>
        <Link to='/'>Home</Link>
        <Link to='/age'>年纪</Link>
        <Link to='/name'>姓名</Link>
      </div>
    )
    const currentComponent = token.isAuth ? basicComponent : authComponnet
    return currentComponent;
  }
}
export default App;
