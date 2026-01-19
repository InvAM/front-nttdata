# front-nttdata

En esta oportunidad se desarrollo un backend sencillo donde mediante un boton ejecutamos el script.js donde tenemos la logica
o llamado a la api de nuestro servicio de python/django

La url que se estara utilizando seria esta const API_URL = "http://localhost:8000/api/users/generate/"

resltar que dicho index.html podemos levantarlo desde cualquier servicio de apertura de puertos o usando el comando

python -m http.server 3000

Resaltar que el puerto debe ser el 3000 ya que el backend tiene en los cors y csrf dicho puerto para poder permitirle a ese puerto consultas
mas que nada por el tema de seguridad
