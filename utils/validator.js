let { body, validationResult } = require('express-validator')
let constants = require('./constants')
let util = require('util')

let options = {
    password:{
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    },
    username:{
        minLength: 6
    }
}

module.exports = {
    validate: function (req, res, next) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            CreateErrorResponse(res, 400, errors.array())
        } else {
            next();
        }
        this.ForgotPasswordValidator,
        this.ChangePasswordValidator,
        this.PostValidation,
        this.PutValidation
    },
    SignUpValidator: [
        body("username").isLength(options.username).withMessage(util.format(constants.VALIDATOR_ERROR_USERNAME,options.username.minLength)),
        body("password").isStrongPassword(options.password).withMessage(util.format(constants.VALIDATOR_ERROR_PASSWORD,
            options.password.minLength,
            options.password.minLowercase,
            options.password.minUppercase,
            options.password.minNumbers,
            options.password.minSymbols)),
        body("email").isEmail().withMessage(constants.VALIDATOR_ERROR_EMAIL)
    ],
    LoginValidator: [
        body("username").isLength(options.username).withMessage("username hoac password sai"),
        body("password").isStrongPassword(options.password).withMessage("username hoac password sai")
    ],
    ChangePasswordValidator: [
        body("oldpassword").notEmpty().withMessage(constants.VALIDATOR_ERROR_OLD_PASSWORD),
        body("newpassword").isStrongPassword(options.password).withMessage(util.format(constants.VALIDATOR_ERROR_PASSWORD,
            options.password.minLength,
            options.password.minLowercase,
            options.password.minUppercase,
            options.password.minNumbers,
            options.password.minSymbols))
    ],
    ForgotPasswordValidator: [
        body("email").isEmail().withMessage(constants.VALIDATOR_ERROR_EMAIL)
    ],
    PostValidation: [
        body("username").isLength(options.username).withMessage(util.format(constants.VALIDATOR_ERROR_USERNAME, options.username.minLength)),
        body("password").isStrongPassword(options.password).withMessage(util.format(constants.VALIDATOR_ERROR_PASSWORD,
            options.password.minLength,
            options.password.minLowercase,
            options.password.minUppercase,
            options.password.minNumbers,
            options.password.minSymbols)),
        body("email").isEmail().withMessage(constants.VALIDATOR_ERROR_EMAIL),
        body("role").notEmpty().withMessage(constants.VALIDATOR_ERROR_ROLE)
    ],
    PutValidation: [
        body("username").optional().isLength(options.username).withMessage(util.format(constants.VALIDATOR_ERROR_USERNAME, options.username.minLength)),
        body("password").optional().isStrongPassword(options.password).withMessage(util.format(constants.VALIDATOR_ERROR_PASSWORD,
            options.password.minLength,
            options.password.minLowercase,
            options.password.minUppercase,
            options.password.minNumbers,
            options.password.minSymbols)),
        body("email").optional().isEmail().withMessage(constants.VALIDATOR_ERROR_EMAIL),
        body("role").optional().notEmpty().withMessage(constants.VALIDATOR_ERROR_ROLE)
    ]
}
// multer