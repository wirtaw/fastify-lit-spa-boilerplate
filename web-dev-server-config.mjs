import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

export default {
  plugins: [
    hmrPlugin({
      include: ['app/website/**/*'],
      presets: [presets.lit, presets.litElement],
      baseClasses: [
        { name: 'MainSpa', import: './app/website/src/MainSpa.js' },
      ],
    }),
  ],
};
