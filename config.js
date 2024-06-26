var appConfig = {
    "IdentityPoolId": "us-west-2:5e92b531-f442-474c-bfd2-4551ecace415"
}

var amplifyConfig = {
    "Auth": {
        "region": "us-west-2",
        "userPoolId": "us-west-2_JbdSJXf3k",
        "userPoolWebClientId": "m3pr4itm687brbn58vpbdlrq3",
        "mandatorySignIn": true,
        "cookieStorage": {
            "domain": window.location.hostname,
            "path": "/",
            "expires": 30,
            "secure": true
      }
    }
}