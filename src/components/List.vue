<template>
  <div class="list">
    <ul>
      <li v-for="(num, index) in pairs" v-bind:key="index">
        <label v-bind:for="`id_${index}`">
          <input
            type="checkbox"
            v-bind:id="`id_${index}`"
            v-on:change="toggleItem(num)"
          />
          {{ num }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  //import masha from '../pairs.json';
  //console.log(Object.keys(masha.pairs).length);

  export default {
    name: 'List',
    data() {
      return {
        pairs: [1, 2, 3, 4, 5],
      };
    },
    //есть ещё вариант перенести данные в computed, чтобы вью не реактивила их
    //типа для убыстрения перфоманса, хотя статистика показала, что перфоманс
    //не увеличился
    /*computed: {
     pairs: () => masha.pairs, //если бы это был массив, то можно было бы его
     порезать slice()
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
        this.$emit('mashaitemsupdated', this.selectedItems);
        // console.log(this.selectedItems);
      },
    },
  };
</script>

<style src="./List.css"></style>
