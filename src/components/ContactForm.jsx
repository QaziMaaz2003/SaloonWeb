import { useState } from 'react'
import Button from './Button.jsx'

const initialState = { name: '', email: '', service: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setValues(initialState)
  }

  if (submitted) {
    return (
      <div className="border border-bronze-deep bg-obsidian-2 p-10 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-bronze mb-4">
          Message Sent
        </p>
        <h3 className="font-display text-2xl text-ivory mb-3">
          Thank you — we&rsquo;ll be in touch shortly.
        </h3>
        <p className="text-sm text-ivory-dim mb-8">
          A member of the Gentry team will confirm your request within one
          business day.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Full Name">
          <input
            type="text"
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Ali Raza"
            className="w-full bg-transparent border-b border-line focus:border-bronze py-3 text-ivory placeholder:text-ivory-dim/50 outline-none transition-colors"
          />
        </Field>
        <Field label="Email Address">
          <input
            type="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className="w-full bg-transparent border-b border-line focus:border-bronze py-3 text-ivory placeholder:text-ivory-dim/50 outline-none transition-colors"
          />
        </Field>
      </div>

      <Field label="Service of Interest">
        <input
          type="text"
          name="service"
          value={values.service}
          onChange={handleChange}
          placeholder="Hair & Beard Package"
          className="w-full bg-transparent border-b border-line focus:border-bronze py-3 text-ivory placeholder:text-ivory-dim/50 outline-none transition-colors"
        />
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Preferred date, time, or any special requests..."
          className="w-full bg-transparent border-b border-line focus:border-bronze py-3 text-ivory placeholder:text-ivory-dim/50 outline-none transition-colors resize-none"
        />
      </Field>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Request
      </Button>
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ivory-dim">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}
