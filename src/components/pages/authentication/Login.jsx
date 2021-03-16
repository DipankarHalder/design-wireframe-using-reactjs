import Input from '../../core/elements/Input';
import AuthLayout from '../../core/layout/AuthLayout';

export default function Login() {
  return (
    <AuthLayout>
      <div className="app-from-wrapper">
        <Input type="email" placeText="Please enter email..." />
        <Input type="password" placeText="Please enter password..." />
      </div>
    </AuthLayout>
  )
}
