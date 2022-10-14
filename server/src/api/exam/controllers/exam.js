

/**
 * exam controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::exam.exam', ({strapi}) => ({
    async generate(ctx){
        if (!ctx.state.user) {
            
        }
    }
}));
