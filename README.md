# README
Rails 7 setup:
rails new asset_arch -T -d postgresql --skip-javascript
cd asset_arch/
bundle add shakapacker --strict
./bin/bundle install
./bin/rails webpacker:install
yarn
yarn add yarn add esbuild esbuild-loader compression-webpack-plugin terser-webpack-plugin webpack webpack-assets-manifest webpack-cli webpack-merge webpack-sources webpack-dev-server
./bin/webpacker-dev-server


Followed the basic Shakerpacker setup from:
https://github.com/shakacode/shakapacker#rails-v6

Experimental esbuild setup with shakapacker
https://github.com/shakacode/shakapacker/blob/master/docs/using_esbuild_loader.md