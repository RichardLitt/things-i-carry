var gulp = require('gulp')
// var coffee = require('gulp-coffee')
// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
// var gulpif = require('gulp-if')
// var sourcemaps = require('gulp-sourcemaps')
// var del = require('del')
var minimist = require('minimist')
var sizeOf = require('image-size')

var paths = {
  images: '.'
}

// Use paths.images unless another folder is speficied with --src flag
var knownOptions = {
  string: 'src',
  default: { src: process.env.src || paths.images }
}

var options = minimist(process.argv.slice(2), knownOptions)

// Copy all static images
gulp.task('images', function () {
  return gulp.src(options.src)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    // For each image do stuff:
    // var dimensions = sizeOf('images/funny-cats.png');
    // console.log(dimensions.width, dimensions.height);
    // require('fs').writeFileSync('dist/build-date.txt', new Date());
    //
    .pipe(gulp.dest('images/'))
})

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.images, ['images'])
})

gulp.task('default', ['watch', 'images'])
