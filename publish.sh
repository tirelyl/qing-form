  
npm run site:build;
cp ./404.html ./dist/qing-form-doc/404.html;
git add dist --force;
git commit -m "demo: build demo";
git subtree push --prefix dist/qing-form-doc origin gh-pages;