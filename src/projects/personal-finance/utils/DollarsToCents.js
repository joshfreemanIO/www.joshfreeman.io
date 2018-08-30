export default (string) => Number.parseFloat(string.replace(/^\$/, '')) * 100
