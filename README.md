# edarcode-api

## Arquitectura

- Screaming architecture

## Herramientas

- Express
- Zod
- Prisma
- PostgreSQL

## Requisitos

Debe tener la database lista para consumir y configurar las variables de entorno. Cree el archivo .env en la raíz del proyecto

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

- **USER:** El nombre del usuario de su base de datos
- **PASSWORD:** La contraseña para el usuario de su base de datos
- **HOST:** El nombre de su host (para el entorno local, es localhost)
- **PORT:** El puerto donde se ejecuta su servidor de base de datos (normalmente 5432para PostgreSQL)
- **DATABASE:** El nombre de la base de datos
- **SCHEMA:** El nombre del esquema dentro de la base de datos

Otras variables de entorno necesarias

```
PORT=3000

BOSS_NAME="edarcode"
BOSS_EMAIL="email@gmail.com"
BOSS_PASSWORD="***"

NODEMAILER_GMAIL="email@gmail.com"
NODEMAILER_GMAIL_APP_PASSWORD="**** **** **** ****"

SECRET_JWT="***"
```

## Scripts

En el package.json ya existen scripts para resetear, migrar, llenar la db con data fake.

- instalar dependencias:

```
npm i
```

- rellenar la db:

```
npm run dbnew
```

- luego

```
npm run dev
```

## Rutas

Están dividas por modulos:

### welcome

- http://localhost:3000

### user

Este modulo contine información sencible, por lo que algunas rutas estan protegidas.

#### client

- POST http://localhost:3000/user/client/auth/signup

Debe proporcionar un correo real dado que se enviará un mensaje de confirmación al mismo, solo se creará el registro cuando haya confirmado. Su contraseña se guardará encryptada.

```
{
  "name": "edarcode",
  "email": "correo@gmail.com",
  "password": "123"
}
```

- POST http://localhost:3000/user/client/auth/login

```
{
  "email": "correo@gmail.com",
  "password": "123"
}
```

#### boss

Tener presente enviar el token por **headers** con la key **Authorization**

- GET http://localhost:3000/user/boss/get

```

```

- POST http://localhost:3000/user/boss/create

```
{
  "name": "fake",
  "email": "fake@gmail.com",
  "password": "123",
  "isAuth": true,
  "role": "CLIENT"
}
```

- POST http://localhost:3000/user/boss/modify/:id

```
{
  "name": "fake two",
  "email": "fake2@gmail.com",
  "password": "1234",
  "isAuth": false,
  "role": "ADMIN"
}
```

- POST http://localhost:3000/user/boss/delete/:id
