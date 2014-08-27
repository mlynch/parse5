exports.Parser = require('./lib/tree_construction/parser');
exports.SimpleApiParser = require('./lib/simple_api/simple_api_parser');
exports.TreeSerializer = require('./lib/tree_serialization/tree_serializer');

exports.TreeAdapters = {
    default: require('./lib/tree_adapters/default'),
    htmlparser2: require('./lib/tree_adapters/htmlparser2')
};