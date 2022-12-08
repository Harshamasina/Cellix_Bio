import Address from './Contacts/Address';
import SendUsEmail from './Contacts/SendUsEmail';

function Contact() {
  return (
    <>
      <h2 className='CUh2'>CONTACT US</h2>
      <Address></Address>
      <SendUsEmail></SendUsEmail>
    </>
  );
}
export default Contact;