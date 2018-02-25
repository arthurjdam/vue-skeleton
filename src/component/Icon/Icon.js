import VueTypes from 'vue-types';

export default {
  name: 'Icon',
  props: {
    name: VueTypes.string.isRequired,
  },
  computed: {
    icon() {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(`!svg-inline-loader!svgo-loader?{"plugins":[{"removeStyleElement":true},{"removeComments":true},{"removeDesc":true},{"removeUselessDefs":true},{"removeTitle":true},{"removeMetadata":true},{"removeComments":true},{"cleanupIDs":{"remove":true,"prefix":""}},{"convertColors":{"shorthex":false}}]!asset/svg/${
        this.name
      }.svg`);
    },
  },
};
