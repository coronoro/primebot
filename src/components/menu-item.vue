<template>
  <div
      class="menu-item flex px-3"
      @click="$emit('select')"
      :class="{'selected': selected}">
    <div class="flex">
      <h3
          class="text-lg text-primebot-gray cursor-pointer"
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
  @apply border-b-8;
  @apply border-primebot-gray;
}

.selected:hover {
  @apply border-gray-500;
}

.menu-item:hover h3 {
  @apply text-gray-500;
}

</style>
