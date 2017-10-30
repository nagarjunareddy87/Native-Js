function createSecretHolder(secret) {
    var _secret = 0;
    return {
        getSecret: function () {
            return _secret;
        },
        setSecret: function (val) {
            _secret = val;
        }
    }
}