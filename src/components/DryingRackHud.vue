<template>
  <v-card class="custom-card">
    <v-card-title class="flex d-flex justify-space-between pt-2">
      <v-img
        :src="require('@/assets/logo_couff_blanc.png')"
        max-height="50"
        max-width="50"
      />
      <h4 v-text="name" />

      <v-img
        :src="require('@/assets/Logo_v2_blanc4.png')"
        max-height="50"
        max-width="60"
      />
    </v-card-title>
    <v-card-text>
      <div class="flex d-flex flex-wrap justify-center align-center">
        <DryingRackItem
          v-for="idx in nbSlot"
          :key="idx"
        />
      </div>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col>
          <v-btn
            elevation="1"
            color="red"

            v-text="$t('btn.recoverDryer')"
            @click="recoverDryer"
          />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DryingRackItem from '@/components/DryingRackItem';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('plants', ['plantInfo']),
    nbSlot() {
      return 10;
    },
  },
  methods: {
    ...mapActions('plants', [
      'fetchFeedPlant',
      'fetchPlantInfo',
      'fetchFillPlant',
      'fetchDestroyPlant',
      'fetchHarvestPlant',
    ]),
  },
  components: { DryingRackItem },
};
</script>

<style scoped>
.custom-card {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 1000px;
  max-height: 500px;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.7);
}
</style>
