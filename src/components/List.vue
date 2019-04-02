<template>
  <div class="list">
    <ul>
      <li v-for="(value, key) in pairs" v-bind:key="key">
        <label v-bind:for="`id_${key}`">
          <input type="checkbox" v-bind:id="`id_${key}`" v-on:change="selectItem()">
          {{ key }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  import masha from '../pairs.json';
  console.log(Object.keys(masha.pairs).length);

  export default {
    name: 'List',
    data() {
      return {
        pairs: masha.pairs,
      };
    },
    methods: {
      selectItem() {
        // return
      }
    }
  };
</script>

<style src="./List.css"></style>
