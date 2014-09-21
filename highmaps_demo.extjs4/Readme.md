# Demo/app

This folder contains the javascript files for the application.

# Demo/resources

This folder contains static resources (typically an `"images"` folder as well).

# Demo/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# Demo/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# Demo/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Demo'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Demo/.sencha/app/sencha.cfg. 

# Demo/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'Demo'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in Demo/.sencha/app/sencha.cfg. 
