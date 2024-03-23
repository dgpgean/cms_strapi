'use strict';

/**
 * oracoe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oracoe.oracoe');
