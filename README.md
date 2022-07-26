## NextAuth.js

Usando los metodos de la Client API de NextAuth.js, se puede obtener la sesion de usuario tanto desde el front como desde el backend con getServerSideProps o bien desde el directorio api.

Para loguearse `/login` , se uso GitHub como provider

- `/` nos va a mostrar informacion del usuario trayendo la sesion desde el backend con *getSession*.
- `/index-front` usa la funcion *useSession* desde el front para velidar si existe un usuario logueado.

En las rutas `/get-logged-user/...` hay ejemplos que usan *getSession* para obtener la sesion, `/get-logged-user/from-front` desde el front y `/get-logged-user/from-back` desde el back con *getServerSideProps*.

En el archivo `api/auth/[...nextauth].js` definimos los providers que queremos utilizar para realizar el login, en este ejemplo use github pero tenemos muchas opciones.

Podemos tambien restringir a usuarios logueados los endpoints del directorio `/api/...` obteniendo la sesion con la misma funcion *getSession*


Docs

[https://next-auth.js.org/getting-started/client](https://next-auth.js.org/getting-started/client)

[https://next-auth.js.org/providers/github](https://next-auth.js.org/providers/github)

Demo
[https://auth-next-dun.vercel.app/](https://auth-next-dun.vercel.app/)
