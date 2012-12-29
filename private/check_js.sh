closure=~/compiler.jar

compileOnly=0
if [ $# -ge 1 ]; then
   compileOnly=1
fi

if [ $compileOnly -eq 0 ]; then
    if [ ! -d "./private" ]; then
      echo "Need to run in top directory"
      exit 1
    fi

    for i in `find . -name '*'.js | grep -v 'docs/output'`
    do

      name=`basename $i`
      if [ "$name" == "ext-all.js" ]; then
	       continue
      fi
    
      echo "Checking for cross browser compatibility: $i"
      java -jar $closure --js $i > /dev/null
      if [ $? -ne 0 ]; then
        exit 1;
      fi
      echo
      echo
    done
fi
 
