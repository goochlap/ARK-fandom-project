import App from './app';
import DinosaurRoute from './resources/dinosaurs/dinosaurs.route';

const PORT = process.env.PORT || 3000;

const app = new App(Number(PORT), [new DinosaurRoute()]);

app.listen();
app.check();
