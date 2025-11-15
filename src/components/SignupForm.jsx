import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import './SignupForm.css'

const schema = z.object({
  firstName: z.string().min(1, 'First Name cannot be empty'),
  lastName: z.string().min(1, 'Last Name cannot be empty'),
  email: z.string().email('Looks like this is not an email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function SignupForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Form submitted:', data)
    onSuccess()
    reset()
  }

  return (
    <div className="signup-container">
      <div className="trial-banner">
        <span className="trial-text">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </span>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className={errors.firstName ? 'error' : ''}
              {...register('firstName')}
            />
            {errors.firstName && (
              <>
                <div className="error-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FF7979" />
                    <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="error-message">{errors.firstName.message}</p>
              </>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className={errors.lastName ? 'error' : ''}
              {...register('lastName')}
            />
            {errors.lastName && (
              <>
                <div className="error-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FF7979" />
                    <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="error-message">{errors.lastName.message}</p>
              </>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className={errors.email ? 'error' : ''}
              {...register('email')}
            />
            {errors.email && (
              <>
                <div className="error-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FF7979" />
                    <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="error-message">{errors.email.message}</p>
              </>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className={errors.password ? 'error' : ''}
              {...register('password')}
            />
            {errors.password && (
              <>
                <div className="error-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#FF7979" />
                    <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="error-message">{errors.password.message}</p>
              </>
            )}
          </div>

          <button type="submit" className="submit-button">
            CLAIM YOUR FREE TRIAL
          </button>

          <p className="terms-text">
            By clicking the button, you are agreeing to our{' '}
            <a href="#" className="terms-link">Terms and Services</a>
          </p>
        </form>
      </div>
    </div>
  )
}