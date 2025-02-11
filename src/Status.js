var UserProfile = (function () {
    var email = "";

    var getEmail = function () {
        return email;    // Or pull this from cookie/localStorage
    };

    var setEmail = function (name) {
        email = name;
        // Also set this in cookie/localStorage
    };

    return {
        getEmail: getEmail,
        setEmail: setEmail
    }

})();

export default UserProfile;