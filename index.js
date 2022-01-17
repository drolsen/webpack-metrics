class WebpackMetrics {

  apply(compiler) {
    compiler.hooks.done.tap({ name: 'WebpackMetrics' }, () => {

    });
  }
}

module.exports = WebpackMetrics;
