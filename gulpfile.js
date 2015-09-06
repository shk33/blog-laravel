var gulp   = require('gulp');
var rename = require('gulp-rename');
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
gulp.task("copyfiles", function() {
  gulp.src("vendor/bower_dl/jquery/dist/jquery.js")
    .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("vendor/bower_dl/bootstrap/less/**")
    .pipe(gulp.dest("resources/assets/less/bootstrap"));

  gulp.src("vendor/bower_dl/bootstrap/dist/js/bootstrap.js")
    .pipe(gulp.dest("resources/assets/js/"));

  gulp.src("vendor/bower_dl/bootstrap/dist/fonts/**")
    .pipe(gulp.dest("public/assets/fonts"));

  gulp.src("vendor/bower_dl/font-awesome/less/**")
    .pipe(gulp.dest("resources/assets/less/font-awesome"));

  gulp.src("vendor/bower_dl/font-awesome/fonts/**")
    .pipe(gulp.dest("public/assets/fonts"));

  // Copy datatables
  var dtDir = 'vendor/bower_dl/datatables-plugins/integration/';

  gulp.src("vendor/bower_dl/datatables/media/js/jquery.dataTables.js")
    .pipe(gulp.dest('resources/assets/js/'));

  gulp.src(dtDir + 'bootstrap/3/dataTables.bootstrap.css')
    .pipe(rename('dataTables.bootstrap.less'))
    .pipe(gulp.dest('resources/assets/less/others/'));

  gulp.src(dtDir + 'bootstrap/3/dataTables.bootstrap.js')
    .pipe(gulp.dest('resources/assets/js/'));

});

/**
* Default gulp is to run this elixir stuff
*/
elixir(function(mix) {
  // Combine scripts
  mix.scripts([
    'js/jquery.js',
    'js/bootstrap.js',
    'js/jquery.dataTables.js',
    'js/dataTables.bootstrap.js'
  ],
  'public/assets/js/admin.js',
  'resources/assets'
  );

  // Compile Less
  mix.less('admin.less', 'public/assets/css/admin.css');
});