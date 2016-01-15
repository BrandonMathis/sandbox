import Button from './Components/Button';
import Header from './Components/Header';
import './styles/app.scss';

const button = new Button('google.com');

button.render('a');
new Header().render('h1');
