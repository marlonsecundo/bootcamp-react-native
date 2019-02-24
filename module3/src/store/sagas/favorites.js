import api from '~/services/api';
import { call, put, select } from 'redux-saga/effects';

import { addFavoriteSuccess, addFavoriteError } from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(addFavoriteError('Repositorio Duplicado'));
    } else {
      yield put(addFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(addFavoriteError('Respoitorio não encontrado'));
  }
}
