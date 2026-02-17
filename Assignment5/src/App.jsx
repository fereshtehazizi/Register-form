import RegisterForm from './component/RegisterForm'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header">
          <p className="pretitle">Register Now</p>
          <h2 className="title">Create your account</h2>
          <p className="subtitle">Register and create your account right now!</p>
        </div>
      <div className="card">
        <div className="content">
          <RegisterForm></RegisterForm>
        </div>
      </div>
    </div>
  )
}

export default App
