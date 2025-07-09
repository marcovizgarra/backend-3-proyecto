import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'AdoptMe',
            version: '1.0.0',
            description: 'Documentación acerca de la aplicación AdoptMe',
            contact: {
                name: 'Marco Vizgarra',
                url: 'https://github.com/marcovizgarra?tab=repositories',
                email: 'marcovizgarra@gmail.com'
            },
            licence: {
                name: 'MIT',
                URL: 'https://opensource.org/licences/MIT'
            }
        },
        servers: [
            {
                url: 'http://localhost:3500',
                description: 'Servidor local'
            }
        ]
    },
    apis: ['./src/routes/*.js'],
};

const swaggerSpect = swaggerJSDoc(options);

export const setUpSwagger = (app) => {
    app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerSpect));
};