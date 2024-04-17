/*!
 * Valid Email
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 */
/**
 * Valid-Email:
 *
 * An alternative to using a regular expression to validate email.
 * Inspired by:
 *      http://stackoverflow.com/questions/997078/email-regular-expression
 *      http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address
 *
 * Examples:
 *     console.log(require('valid-email')('john@iamjohnhenry.com'))//#true
 *     console.log(require('valid-email')('iamjohnhenry.com'))//#false
 *
 * @param {String} email
 * // potential email address
 * @return {Boolean}
 * @api public
 */
export declare function valid_email(email: string): Boolean;
