import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import historySaga from './history.saga';
import formSaga from './form.saga';
import detailSaga from './detail.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
    yield all([
        userSaga(),
        loginSaga(), // login saga is now registered
        formSaga(),
        historySaga(),
        registrationSaga(),
        detailSaga(),
    ]);
}
