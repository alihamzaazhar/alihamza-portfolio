import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="wrap flex min-h-[70vh] flex-col justify-center py-24">
      <p className="label text-[var(--accent)]">404</p>
      <h2 className="display mt-4 text-4xl">Page not found</h2>
      <p className="mt-3 max-w-md text-[15px] text-[var(--muted)]">
        The page you are looking for does not exist or has moved.
      </p>
      <Link to="/" className="label link-underline mt-8 w-fit">
        ← Back to home
      </Link>
    </div>
  )
}

export default NotFound
