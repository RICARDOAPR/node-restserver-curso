
//PUERTO:
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO DEL TOKEN
//60seg * 60min * 24h * 30d
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//SEED DE AUTENTICACION
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe'
}
else
{
    urlDB = "mongodb+srv://admin:123456parare@cluster0-sadea.mongodb.net/cafe";
}

process.env.URLDB = urlDB;


//GOOLGE CLIENT ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '183060373444-m7ag97jjujqvparbvi09tar2ulapntvj.apps.googleusercontent.com';