const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const paths = {
  scss: './src/**/*.module.scss' // SCSS 모듈 파일 경로
};

gulp.task('add-imports', () => {
  return gulp.src(paths.scss)
    .pipe(replace(/^(.*)$/m, '@import "../_variables.scss";\n@import ""../_mixins.scss";\n$1'))
    .pipe(gulp.dest((file) => file.base)); // 원래 파일 위치에 저장
});

gulp.task('default', gulp.series('add-imports'));