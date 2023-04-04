
default:
  cd plugin && cargo build-wasi --release
  cd javascript && yarn --force
  cd javascript && node ./compile;

