var jade = require('jade');
var path = require('path');

/*
 * Get html from response and parse jade markup
 *
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - The callback function
 * */
exports.process = function (req, res, next) {
    if (req.specData && req.specData.renderedHtml) {
        if (req.specData.isJade) {
            var html = req.specData.renderedHtml;

            /* render jade markup */
            html = jade.render(html, {
                pretty: true,
                filename: path.join(global.app.get('user'), req.path)
            });

            req.specData.renderedHtml = html;
        }
    }

    next();
};