<template>
  <div class="album">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.artist}}</p>
    <p class="card-text">Track Count: {{item.tracks}}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "AlbumDetails",
  props: {item: Album},
}
</script>

<style scoped>

</style>