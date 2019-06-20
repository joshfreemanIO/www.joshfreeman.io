module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '@components/(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    '^.+\\.jsx?$': './jest.preprocess.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest.mock-file-transformer.js'
  },
}
