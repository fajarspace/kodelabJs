#!/bin/bash

echo -e "pull last repo first, if any edited"
git pull

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# cd public

npm run build

netlify deploy --prod

cd ..