import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userActionTypes } from './user.types';
import {
  auth,
  createUserProfile,
  googleProvider
} from '../../firebase/firebase.util';
import { googleSignInSuccess, googleSignInFailure } from './user.action';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfile, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
