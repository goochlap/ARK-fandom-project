import App from './app';

const PORT = process.env.PORT || 3000;

const app = new App(Number(PORT));

app.listen();
app.check();
