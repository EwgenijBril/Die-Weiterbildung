import { useState } from "react"
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {

  const [modal, setModal] = useState(true);

  return (
    <div >

      <Button color='yellow'>Open modal window</Button>

      <Modal modal={modal} setModal={setModal}/>

      {/* <FormItem 
      title={'Registration'}
      button={{submit: 'Registration', redirect: 'Login'}}
      info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters'}
      form_type={'registration'}
      /> */}

      {/* <FormItem title={'Login'}
      button={{submit: 'Login', redirect: 'Registration'}}
      info_text={'Reset password'}
      form_type={'login'}
      />

      <FormItem title={'Reset password'}
      button={{submit: 'Send'}}
      info_text={'The temporary password is valid for 24 hours.'}
      info_text_2={'To receive a temporary password, you must enter the email address you provided during registration.'}
      form_type={'reset password'}
      /> */}
    </div>
  );
}

export default App;
