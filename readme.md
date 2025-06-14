## Entrega 1:

### Endpoint: localhost:3500/api/mocks/generate/pet

- Router mocks creado e implementado en: src\routes\mocks.js:
    + app.js modificado: fue agregado el router mocks
    + mocks.js: endpoint /generate/pet añadido
    + pets.controller.js modificado: función generate fake pets creada e implementada

    ```

    Ej de request apuntando a localhost:3500/api/mocks/generate/pet
    
    { "quantity": 10 }

    ```
### Endpoint: localhost:3500/api/mocks/generate/user

- En router mocks:
    + ruta agregada: 
        + router.post('/generate/user', usersController.generateFakeUser);
    
    + user.controller.js:
        + función generateFakeUser añadida, crea la cantidad de usuarios solicitados mediante la request
    
    ```

    Ejemplo de request apuntando a localhost:3500/api/mocks/generate/user

   { "quantity": 5 }

    ```