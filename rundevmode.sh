# ./node_modules/.bin/node-supervisor supervisor bin/www
gnome-terminal -e "node watch-build"
./node_modules/.bin/node-supervisor -- bin/www
