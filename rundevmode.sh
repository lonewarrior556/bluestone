# ./node_modules/.bin/node-supervisor supervisor bin/www
gnome-terminal -e "node watch-build"
NODE_ENV='dev' ./node_modules/.bin/node-supervisor -- bin/www
