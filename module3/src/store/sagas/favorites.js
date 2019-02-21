import api from '~/services/api';
import { call } from 'redux-saga/effects';

export function* addFavoriteRequest(action) {
  const response = yield call(api.get, `/repos/${action.payload.repoName}`);

  console.tron.log(response);
}
