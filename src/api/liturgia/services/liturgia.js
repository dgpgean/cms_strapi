'use strict';

/**
 * liturgia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liturgia.liturgia');
