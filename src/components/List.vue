<template>
  <div class="list">
    <ul>
      <li v-for="(value, key) in pairs" v-bind:key="key">
        <label v-bind:for="`id_${key}`">
          <input type="checkbox" v-bind:id="`id_${key}`" v-on:change="toggleItem(key)" />
          {{ key }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  import masha from '../pairs.json';
  // console.log(Object.keys(masha.pairs).length);

  export default {
    name: 'List',
    data() {
      return {
        pairs: masha.pairs,
      };
    },
    //есть ещё вариант перенести данные в computed, чтобы вью не реактивила их
    //типа для убыстрения перфоманса, хотя статистика показала, что перфоманс
    //не увеличился
    /*computed: {
     pairs: () => masha.pairs,
     },*/
    created() {
      this.selectedItems = [];
    },
    methods: {
      toggleItem(key) {
        let index = this.selectedItems.indexOf(key);

        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        } else {
          this.selectedItems.push(key);
        }

        console.log(this.selectedItems);
      },
    },
  };
</script>

<style src="./List.css"></style>
