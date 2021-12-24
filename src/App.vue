<template>
  <v-app class="custom-background">
    <div
      class="custom-ui"
    >
      <PlantHud v-if="showPlant" />
      <DryingRackHud v-if="dryingRack" />
    </div>
  </v-app>
</template>

<script>
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { mapState, mapActions } from 'vuex';
import PlantHud from '@/components/PlantHud';
import DryingRackHud from '@/components/DryingRackHud';

export default {
  name: 'App',
  created() {
  },
  mounted() {
    window.addEventListener('message', async (event) => {
      const { data } = event;
      switch (data.type) {
        case 'showPlant':
          this.showPlant = data.showPlant;
          this.sqlId = data.sqlId;
          await this.fetchPlantInfo(this.sqlId);
          this.getPlant();
          break;
        case 'updatePlant':
          await this.fetchPlantInfo(this.sqlId);
          break;
        default:
          break;
      }
    });
  },
  data() {
    return {
      dryingRack: true,
      showPlant: false,
      sqlId: null,
    };
  },
  computed: {
    ...mapState('plants', ['plantInfo']),

  },

  methods: {
    ...mapActions('plants', [
      'fetchPlantInfo',
    ]),
    getPlant() {
      this.fetchPlantInfo(this.sqlId);
      if (this.showPlant) {
        setTimeout(() => {
          this.getPlant();
        }, 5000);
      }
    }

  },
  components: { PlantHud, DryingRackHud },
};
</script>
<style scoped>
.custom-background {
  background-color: transparent !important;
  overflow: hidden !important;
}
.custom-ui {
  width: 100% !important;
  height: 100% !important;
}
</style>
<style>
html {
  overflow: hidden !important;
}
</style>
