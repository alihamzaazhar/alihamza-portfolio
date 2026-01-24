import { AnimatePresence, motion } from 'framer-motion'

export type ToastType = 'success' | 'error'

export type ToastMessage = {
  id: number
  type: ToastType
  title: string
  message?: string
}

type ToastProps = {
  toasts: ToastMessage[]
  onDismiss: (id: number) => void
}

const Toast = ({ toasts, onDismiss }: ToastProps) => {
  return (
    <div className="fixed right-6 top-24 z-[60] flex w-full max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.button
            key={toast.id}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            className={`rounded-2xl border px-4 py-3 text-left text-sm shadow-lg backdrop-blur transition ${
              toast.type === 'success'
                ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-50'
                : 'border-rose-400/40 bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-50'
            }`}
            onClick={() => onDismiss(toast.id)}
            type="button"
          >
            <p className="font-semibold">{toast.title}</p>
            {toast.message ? (
              <p className="mt-1 text-xs text-white/80">{toast.message}</p>
            ) : null}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Toast
