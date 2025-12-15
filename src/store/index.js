import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import myhome from './myhome'
import mysearch from './mysearch'

export default new Vuex.Store({
    modules: {
        myhome,
        mysearch
    }
});