<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    @keydown.esc="cancel()"
  >
    <v-toolbar
      dark
      :color="options.color"
      dense
    >
      <v-toolbar-title class="white--text">
        <span>{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        dark
        @click.native="cancel()"
      >
        X
      </v-btn>
    </v-toolbar>
    <v-card tile>
      <v-card-text
        v-show="!!message"
        class="py-3"
        v-html="message"
      />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          text
          @click.native="cancel()"
        >
          {{ $t("button.no") }}
        </v-btn>
        <v-btn
          color="primary darken-1"
          text
          @click.native="agree()"
        >
          {{ $t("button.yes") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        color: 'primary',
        width: 290
      }
    };
  },
  methods: {
    open(title, message, options) {
      this.dialog = true;
      this.title = title;
      this.message = message;
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    }
  }
};
</script>
