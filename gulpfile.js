const {src,dest,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    src('src/scss/**/*.scss') //Identifica el archivo SASS
    .pipe(plumber())
    .pipe(sass()) //Compila el archivo sass
    .pipe(dest('build/css')) //Almacena el archivo compilado
    done();
}

function dev(done){
    watch('src/scss/**/*.scss',css);

    done();
}

exports.css = css;
exports.dev = dev;