## Ejemplo NextAuth.js

Usando los metodos de la Client API de NextAuth.js, se puede obtener la sesion de usuario tanto desde el front como desde el backend con getServerSideProps o bien desde el directorio api.

Para loguearse `/login` , se uso GitHub como provider

- `/` nos va a mostrar informacion del usuario trayendo la sesion desde el backend con *getSession*.
- `/index-front` usa la funcion *useSession* desde el front para velidar si existe un usuario logueado.

En las rutas `/get-logged-user/...` hay ejemplos que usan *getSession* para obtener la sesion, `/get-logged-user/from-front` desde el front y `/get-logged-user/from-back` desde el back con *getServerSideProps*.

En el archivo `api/auth/[...nextauth].js` definimos los providers que queremos utilizar para realizar el login, en este ejemplo use github pero tenemos muchas opciones.


Docs
[https://next-auth.js.org/getting-started/client](https://next-auth.js.org/getting-started/client)
[GithubProvider](https://next-auth.js.org/providers/github)




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
