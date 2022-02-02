import {configureStore} from '@reduxjs/toolkit';

import { cryptoApi } from '../data/cryptoApi';
import { cryptoNewsApi } from '../data/cryptoNewsApi';

export default configureStore({
    reducer : {
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer
    },
});