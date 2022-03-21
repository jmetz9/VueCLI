<template>
  <div class="card-columns">
    <library-item v-for="(item, i) in list" :key="i" :item="item" @add-to-bag="$emit('add-to-bag',item)"></library-item>
  </div>
</template>

<script>
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "LibraryList",
  components: {LibraryItem},
  props: {list: Array},
  data() {
    return {
      page: 1
    }
  },

}
</script>

<style scoped>

</style>
