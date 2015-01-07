# Gulp Mincer

Gulp Plugin for Mincer

### Usage:

```javascript
...pipe( require('gulp-mincer')(env) )...;
```

### Example:

```javascript
var gulp = require('gulp');
var Mincer = require('mincer');
var mince = require("gulp-mincer");

var env = new Mincer.Environment();

env.appendPath("assets/javascripts");
env.appendPath("assets/stylesheets");

gulp.task('default', function() {
  gulp.src("assets/**/application.*")
    .pipe( mince(env) )
    .pipe( gulp.dest("public") );
});
```
