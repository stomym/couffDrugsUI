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
        :src="require('@/assets/Logo_v2_blanc2.png')"
        max-height="50"
        max-width="50"
      />
    </v-card-title>
    <v-card-text>
      <v-row
        justify="space-between"
        class="text-center"
      >
        <v-col cols="3">
          <v-progress-circular
            :size="100"
            :width="10"
            :value="growth"
            color="green"
          >
            {{ growth }}
          </v-progress-circular>
          <v-card-subtitle v-text="$t('growth')" />
        </v-col>
        <v-col cols="3">
          <v-progress-circular
            :size="100"
            :width="10"
            :value="food"
            color="orange darken-3"
          >
            {{ food }}
          </v-progress-circular>
          <v-card-subtitle v-text="$t('food')" />
        </v-col>
        <v-col cols="3">
          <v-progress-circular
            :size="100"
            :width="10"
            :value="water"
            color="blue"
          >
            {{ water }}
          </v-progress-circular>
          <v-card-subtitle v-text="$t('water')" />
        </v-col>
        <v-col cols="3">
          <v-progress-circular
            :size="100"
            :width="10"
            :value="earthQuality"
            color="brown lighten-1"
          >
            {{ earthQualityLevel }}
          </v-progress-circular>
          <v-card-subtitle v-text="$t('earthQuality')" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="11">
          <h4
            v-if="isDeath"
            class="error--text"
          >
            {{ $t('info.plantDeath') }}
          </h4>
          <h4
            v-else-if="!canGrowth"
            class="error--text"
          >
            {{ $t('info.requireForGrowth') }}
          </h4>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col>
          <v-btn
            elevation="1"
            color="green"
            text
            :disabled="isDeath && !canHarvest"
            v-text="$t('btn.harvest')"
            @click="harvest"
          />
        </v-col>

        <v-col>
          <v-btn
            elevation="1"
            color="orange darken-3"
            text
            :disabled="isDeath"
            v-text="$t('btn.feed')"
            @click="feed"
          />
        </v-col>
        <v-col>
          <v-btn
            elevation="1"
            color="blue"
            text
            :disabled="isDeath"
            v-text="$t('btn.putWater')"
            @click="fill"
          />
        </v-col>
        <v-col>
          <v-btn
            elevation="1"
            color="red"
            text
            v-text="$t('btn.destroy')"
            @click="destroy"
          />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

  data() {
    return {
    };
  },
  computed: {
    ...mapState('plants', ['plantInfo']),
    name() {
      if (this.plantInfo && 'type' in this.plantInfo) {
        return this.plantInfo.type.name;
      }
      return '';
    },
    earthQuality() {
      if (this.plantInfo && 'earthQuality' in this.plantInfo) {
        return this.plantInfo.earthQuality;
      }
      return 0;
    },
    food() {
      if (this.plantInfo && 'food' in this.plantInfo) {
        return this.plantInfo.food.toFixed(2);
      }
      return 0;
    },
    water() {
      if (this.plantInfo && 'water' in this.plantInfo) {
        return this.plantInfo.water.toFixed(2);
      }
      return 0;
    },
    growth() {
      if (this.plantInfo && 'growth' in this.plantInfo) {
        return this.plantInfo.growth.toFixed(2);
      }
      return 0;
    },
    canGrowth() {
      if (this.food > 30 && this.water > 30) {
        return true;
      }
      return false;
    },
    isDeath() {
      if (this.plantInfo && 'isDeath' in this.plantInfo) {
        return this.plantInfo.isDeath;
      }
      return false;
    },
    canHarvest() {
      return this.plantInfo.growth === 100;
    },
    earthQualityLevel() {
      if (this.earthQuality > 80) return this.$t('earth.excellent');
      if (this.earthQuality > 50) return this.$t('earth.good');
      if (this.earthQuality > 30) return this.$t('earth.medium');
      if (this.earthQuality >= 0) return this.$t('earth.bad');
      return this.$t('earth.veryBad');
    },
  },
  methods: {
    ...mapActions('plants', ['fetchFeedPlant', 'fetchPlantInfo', 'fetchFillPlant', 'fetchDestroyPlant', 'fetchHarvestPlant']),
    feed() {
      this.fetchFeedPlant(this.plantInfo.sqlId).then((res) => {
        if (res.success) {
          this.fetchPlantInfo(this.plantInfo.sqlId);
        }
      });
    },
    fill() {
      this.fetchFillPlant(this.plantInfo.sqlId).then((res) => {
        if (res.success) {
          this.fetchPlantInfo(this.plantInfo.sqlId);
        }
      });
    },
    destroy() {
      this.fetchDestroyPlant(this.plantInfo.sqlId);
    },
    harvest() {
      this.fetchHarvestPlant(this.plantInfo.sqlId);
    }
  },
};
</script>

<style scoped>
.custom-card {
  left: 100px;
  top: 250px;
  position: absolute;
  max-width: 650px;
  max-height: 500px;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.7);
}
</style>
