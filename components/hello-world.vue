<template>
  <div>
    <template>
      <div :class="$style.test">
        <p>Hello World</p>
        <p />
        <div class="mb-4">
          <b-avatar></b-avatar>
          <b-avatar variant="primary" text="BV"></b-avatar>
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
          <b-avatar variant="success" icon="people-fill"></b-avatar>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style module>
.test {
  color: var(--purple);
}
</style>
