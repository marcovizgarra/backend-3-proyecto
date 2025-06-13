## Entrega 1:

### Endpoint localhost:3500/api/mocks/generate/pet

- Router mocks creado e implementado en: src\routes\mocks.js:
    + app.js modificado: fue agregado el router mocks
    + mocks.js: endpoint /generate/pet añadido
    + pets.controller.js modificado: función generate fake pets creada e implementada

    ```
    Ej de query apuntando hacia localhost:3500/api/mocks/generate/pet
    
    {
        "quantity": 10
    }
    ```