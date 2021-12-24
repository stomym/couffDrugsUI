<template>
  <v-menu
    v-model="showMenu"
    absolute
    offset-y
    style="max-width: 600px"
  >
    <template #activator="{ on, attrs }">
      <v-card
        elevation="2"
        outlined
        shaped
        class="custom-slot ma-4"
        v-bind="attrs"
        v-on="on"
      >
        <v-img
          :src="require('@/assets/weed.png')"
          class="custom-image"
          contain
          aspect-ratio="1"
        />
        <h4 class="text-center title-slot">
          pied de weed
        </h4>
      </v-card>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-title @click="testFunc(item.title)">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  computed: {
    ...mapState('plants', ['plantInfo']),
  },
  methods: {
    ...mapActions('plants', ['fetchFeedPlant', 'fetchPlantInfo', 'fetchFillPlant', 'fetchDestroyPlant', 'fetchHarvestPlant']),
    testFunc(val) {
      console.log(val);
    }
  },
};
</script>
<style scoped>
.custom-slot{
  width:150px;
  height:150px;
  background-color: transparent
  /* background-color: rgba(216, 216, 216, 0.4); */
}
.title-slot{
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
}
.custom-image{
  max-width:80%;
  max-height: 80%;
  margin:0 auto;
}
</style>
