<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-list :list="library" @add-to-bag="addToBag"></library-list>
      <hr>
      <bag-list :list="bag" @remove-from-bag="removeFromBag" @check-all-out="checkAllOut"></bag-list>
    </div>
  </div>
</template>

<script>
// import HelloUniverse from './components/HelloWorld.vue'
import LibraryList from "@/components/LibraryList";
import BagList from "@/components/BagList";
import BagCollection from "@/models/BagCollection";
import LibraryCollection from "@/models/LibraryCollection";
import {Album, Book, Movie} from "@/models/LibraryItems";



export default {
  name: 'App',
  components: {
    LibraryList,
    BagList
    // HelloUniverse
  },
  data() {
    return {
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 234))
          .addItem(new Book('Learn Vue', 345))
          .addItem(new Movie('The Muppets', 107))
          .addItem(new Movie('Strange Brew', 97))
          .addItem(new Album('Title', 'Artist', 3)),
      bag: new BagCollection(),
      page: 1
    }
  },
  methods: {
    addToBag: function(item){
      this.bag.addToBag(item);
    },
    removeFromBag: function (item){
      this.bag.removeFromBag(item)
    },
    checkAllOut: function (){
      this.bag.forEach(i => {
        i.checkOut();
      })
      this.bag = new BagCollection();
    }
  }
}
</script>

<style>

</style>
