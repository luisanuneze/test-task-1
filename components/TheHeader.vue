<template>
  <section>
    <div v-for="store in sectionsData" :key="store.id">
      <h2>{{ store.title }}</h2>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sectionsData"])
  }
};
</script>

<style lang="scss" scoped></style>
