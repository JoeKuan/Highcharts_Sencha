closure=~/compiler.jar

if [ ! -d "./private" ]; then
  echo "Need to run in top directory"
  exit 1
fi

for i in `find . -name '*'.js`
do
  echo "Checking for cross browser compatibility: $i"
  java -jar $closure --js $i > /dev/null
  if [ $? -ne 0 ]; then
    exit 1;
  fi
  echo
  echo
done

head Chart/ux/Highcharts.js > Chart/ux/Highcharts.compiled.js 
java -jar $closure --js Chart/ux/Highcharts.js >> Chart/ux/Highcharts.compiled.js
