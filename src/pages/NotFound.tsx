import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
        <h2 className="text-3xl font-semibold text-slate-900">Page not found</h2>
        <p className="text-lg text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link
          className="w-fit rounded-full border border-slate-900 px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
