const checkAuth = (request, response, next) => {
    const token = request.headers.authorization;

    if (/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)){
        next();
    } else {
        const HttpStatuaNotAuthorized = 401;
        const errorInfo = {
            status = HttpStatuaNotAuthorized,
            message = 'Not Authorized!'
        }
        response
            .status(HttpStatuaNotAuthorized)
            .json(errorInfo);
    }

}

module.exports = checkAuth;