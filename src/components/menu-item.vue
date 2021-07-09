<template>
  <div
      class="flex px-3"
      @click="$emit('select')"
      :class="{'selected': selected}">
    <div class="flex">

      <h3
          class="cursor-pointer hover:color-800"
          @click="navigate(item.route)">{{ item.name }}</h3>
      <div v-if="item.children">
        >
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  data() {
  },
  props: {
    item: {
      type: Object
    },
    selected: {
      type: Boolean
    }
  },
  methods: {
    navigate(routeName) {
      this.$router.push(routeName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected {
  @apply border-b-2;
}

</style>
