'use strict';

/**
 * rosario service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rosario.rosario');
