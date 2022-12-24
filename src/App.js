import { RegisterForm } from "./components/RegisterForm";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({})
  const [confirmationOpen, setConfirmation] = useState(false)
  const [isComfirmed, setConfirmed] = useState(false)
  
  const confirmUserData = (data) => {
    setUser(data)
    setConfirmation(true)
  }
  
  const closeDialog = () => setConfirmation(false)
  
  const confirm = () => {
    closeDialog()
    setConfirmed(true)
  }

  console.log(user);

  return (
    <>
      <main>
        {isComfirmed
          ? `Congratulation user ${user.email}`
          : <RegisterForm onSubmit={confirmUserData} />
        }
      </main>
      <ConfirmDialog
        title="Please confirm registration"
        cancel={closeDialog}
        open={confirmationOpen}
        confirm={confirm}
      >
        <p>Please confirm your email: {user.email}</p>
      </ConfirmDialog>

      USER: {JSON.stringify(user)}
    </>
  );
}

export default App;
