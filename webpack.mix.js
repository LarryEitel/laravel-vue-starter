const { mix } = require('laravel-mix');
/*
 * Load Our App Script
 */
mix.js('resources/assets/js/app.js', 'public/js')
/*
 * We Extract Vendor Script see: packages.json
 */
   .extract(['vue', 'lodash', 'jquery', 'axios', 'element-ui', 'vue-router', 'vue-timeago', 'vuex', 'vuex-router-sync'])
/*
 * Load Our App Styling
 */   
   .sass('resources/assets/sass/app.scss', 'public/css')
/*
 * Load SourceMap For Extra Debugging Feature in Development
 */
   .sourceMaps()
/*
 * Version Our Script Only if Production
 */
if (mix.config.inProduction) {
  mix.version()
}
/*
 * Disable Notifications
 */
mix.disableNotifications()
