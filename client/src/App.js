import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';
import { GlobalStyle } from './global.styles';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

const HomePage = lazy(() => import('./pages/home/home'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/signin-signup/signin-signup')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
