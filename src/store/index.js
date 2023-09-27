import { createStore } from "vuex";

import test from "./test";

const store = createStore({
    modules:{
        namespaced:true,
        test
    }
})

export default store