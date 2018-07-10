var pug  = require('pug');
var path = require('path');
var specUtils = require(path.join(global.pathToApp,'core/lib/specUtils'));
var configUtils = require(path.join(global.pathToApp, 'core/lib/configUtils'));

/*
 * Get html from response and parse jade markup
 *
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - The callback function
 * */
exports.process = function (req, res, next) {
    if (req.specData && req.specData.renderedHtml) {
        if (req.specData.isJade || req.specData.isPug) {
            var html = req.specData.renderedHtml;
            var specDir = specUtils.getFullPathToSpec(req.path);
            var specFiles = configUtils.getContextOptions(req.path).rendering.specFiles;
            var specFilePath = specUtils.getSpecFromDir(specDir, specFiles);

            /* render jade markup */
            html = pug.render(html, {
                pretty: true,
                basedir: global.app.get('user'),
                filename: specFilePath
            });

            req.specData.renderedHtml = html;
        }
    }

    next();
};
