export const state = () => ({
  sectionsData: []
});

export const mutations = {
  updateSectionsData: (state, data) => {
    state.value = data;
  }
};

export const actions = {
  async getSectionsData({ state, commit }) {
    if (state.sectionsData.length) return;
    try {
      await fetch("/wp/v2/pages/<page-id>")
        .then(response => response.json())
        .then(data => {
          commit("updateSectionsData", data);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
