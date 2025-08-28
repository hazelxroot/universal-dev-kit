const { generate } = require('@storybook/react-native/scripts/generate');
const { getDefaultConfig } = require('expo/metro-config');
const findWorkspaceRoot = require('find-yarn-workspace-root');
const { withNativeWind } = require('nativewind/metro');
const { withUnitools } = require('@unitools/metro-config');
const path = require('path');

// eslint-disable-next-line no-undef
const workspaceRoot = findWorkspaceRoot(__dirname);
// Find the project and workspace directories
// eslint-disable-next-line no-undef
const projectRoot = __dirname;
generate({
  configPath: path.resolve(projectRoot, './.ondevice'),
  useJs: true,
});

const config = getDefaultConfig(projectRoot);

// Optimize for memory usage
config.transformer.unstable_allowRequireContext = true;
config.transformer.minifierConfig = {
  mangle: {
    keep_fnames: true,
  },
  output: {
    ascii_only: true,
    quote_style: 3,
    wrap_iife: true,
  },
  sourceMap: {
    includeSources: false,
  },
  toplevel: false,
  compress: {
    reduce_funcs: false,
  },
};

// Memory optimization
config.transformer.workerCount = Math.max(1, Math.floor(require('os').cpus().length / 2));
config.resolver.platforms = ['ios', 'android', 'web'];

config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Add source map configuration for better memory management
config.transformer.enableBabelRCLookup = false;
config.transformer.enableBabelRuntime = false;

module.exports = withUnitools(
  withNativeWind(config, {
    input: './globals.css',
    inlineRem: 16,
  })
);
