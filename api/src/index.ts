import App from './app';
import DinosaurRoute from './resources/dinosaurs/dinosaurs.route';
import UserRoute from './resources/users/user.route';

const PORT = process.env.PORT || 3000;

const app = new App(PORT, [new DinosaurRoute(), new UserRoute()]);

app.listen();
app.check();
