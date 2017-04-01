//各機能の読み込み
var gulp = require('gulp');
var babel = require("gulp-babel");
//var browserSync = require('browser-sync');

gulp.task('babel', function() {
  gulp.src('./*.es6')
    .pipe(babel({
        presets: ['es2015']
      }))
    .pipe(gulp.dest('./dist'))
});


gulp.task('watch', function() {
  gulp.watch('./*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);