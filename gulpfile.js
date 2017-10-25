var gulp = require('gulp');
var del = require("del");
var sass = require('gulp-sass');
var htmlmin = require('gulp-html-minifier'); 


gulp.task('clean', function(){
	del("./dist/");
});


gulp.task('sass', function () {
  	return gulp.src('./source/scss/style.scss')
    	.pipe(sass())
    	.pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', function() {
  	gulp.src('./source/*.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
    	.pipe(gulp.dest('./dist'))
});
 
gulp.task('background', ['clean', 'sass', 'minify'], function () {
  	gulp.watch('./source/scss/*.scss', ['sass']);
  	gulp.watch('./source/*.html', ['minify']);
});

gulp.task('default', ['background']);
 