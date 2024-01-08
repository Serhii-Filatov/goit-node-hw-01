const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsArr = await listContacts();
      console.table(contactsArr);
      break;

    case 'get':
      const currentContact = await getContactById(id);
      console.table(currentContact);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
