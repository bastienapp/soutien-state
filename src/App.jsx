import './App.css';
import ContactItem from './components/ContactItem';

function App() {
  // afficher un contact avec son prénom, son nom, son age, son métier

  // créer un objet qui représente la personne
  const contactList = [
    {
      key: 'WD40',
      firstName: 'Guillaume',
      lastName: 'Lefort',
      age: 32,
      job: 'junior web developer',
    },
    {
      key: 98765432123456789,
      firstName: 'Michel',
      lastName: 'Durand',
      age: 67,
      job: 'retraité',
    },
    {
      key: 666,
      firstName: 'Juliette',
      lastName: 'Popote',
      age: 29,
      job: 'Avocate',
    },
  ];

  return (
    <div className='App'>
      {contactList.map((contact) => (
        <ContactItem {...contact} />
      ))}
    </div>
  );
}

export default App;
