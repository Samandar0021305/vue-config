const test = {
    state() {
      return {};
    },
    getters: {},
    mutations: {
      setState(state, { key, value }) {
        state[key] = value;
      },
    },
    actions: {
      async deleteItems(_, { items, api }) {
        return new Promise(async (resolve, reject) => {
          try {
            let promises = [];
            items.forEach((el) => {
              if (!el) {
                return false;
              }
              let promise = new Promise(async (resolve, reject) => {
                try {
                  await this.$axios.delete(`${api}/${el}`);
                  resolve({
                    status: true,
                  });
                } catch (e) {
                  reject({
                    status: false,
                    error: e,
                  });
                }
              });
              promises.push(promise);
            });
            await Promise.all(promises);
            resolve({ status: true });
          } catch (error) {
            console.error(error);
          }
        });
      },
    },
  };
  
  export default test;
  
  