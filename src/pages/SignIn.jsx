import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { X } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      {isOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <div className="bg-white rounded-3 shadow-lg p-4 w-25 position-relative">
            <button onClick={() => setIsOpen(false)} className="btn-close position-absolute top-0 end-0 m-3"></button>
            <h2 className="text-center mb-3">Sign In</h2>
            <p className="text-muted text-center mb-4">
              Don't have an account? <span className="fw-bold text-dark cursor-pointer">Sign Up</span>
            </p>
            <form>
              <div className="input-group mb-3">
                <span className="input-group-text"><FaUser /></span>
                <input type="text" className="form-control" placeholder="Enter your username or email" />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text"><FaLock /></span>
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <div className="text-end text-muted mb-3">Forgot password?</div>
              <button className="btn btn-dark w-100">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
