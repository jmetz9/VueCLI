<template>
  <div class="card-columns">
    <bag-item v-for="(item, i) in list" :key="i" :item="item" @remove-from-bag="$emit('remove-from-bag')"></bag-item>
    <button @click="$emit('check-all-out')">Check Out</button>
  </div>
</template>

<script>
import BagItem from "@/components/BagItem";
import BagCollection from "@/models/BagCollection";

export default {
  name: "BagList",
  components: {BagItem},
  props: {list: Array || BagCollection},


}
</script>

<style scoped>

</style>