import api from '~/services/api';
import { call, put, select } from 'redux-saga/effects';

import { Creators } from '~/store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === response.data.id)) {
      yield put(Creators.addFavoriteError('Repositorio Duplicado'));
    } else {
      yield put(Creators.addFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(Creators.addFavoriteError('Respoitorio não encontrado'));
  }
}
