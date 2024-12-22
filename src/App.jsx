
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "./redux/contacts/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const items = useSelector(selectItems); 
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>Something went wrong. Please try again!</p>
      )}
    </div>
  );
}

export default App;
