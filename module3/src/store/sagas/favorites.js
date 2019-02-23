import api from '~/services/api';
import { call, put } from 'redux-saga/effects';

import { addFavoriteSuccess, addFavoriteError } from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);
    yield put(addFavoriteSuccess(response.data));
  } catch (error) {
    yield put(addFavoriteError('Respoitorio não encontrado'));
  }
}
