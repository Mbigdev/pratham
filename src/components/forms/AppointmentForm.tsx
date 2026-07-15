"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Stepper } from "./Stepper";
import { FormField } from "@/components/ui/FormField";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  appointmentTypes,
  specialtyOptions,
  locations,
  timeSlots,
  doctors,
} from "@/lib/data";

const steps = ["Care need", "Your details", "Preferences", "Review"];

type FormState = {
  appointmentType: string;
  specialty: string;
  doctor: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  isNewPatient: string;
  reason: string;
  consent: boolean;
};

const initialState: FormState = {
  appointmentType: "",
  specialty: "",
  doctor: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  location: "",
  preferredDate: "",
  preferredTime: "",
  isNewPatient: "",
  reason: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AppointmentForm({ defaultType, defaultLocation }: { defaultType?: string; defaultLocation?: string }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    ...initialState,
    appointmentType: defaultType ?? "",
    location: defaultLocation ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validateStep(current: number): boolean {
    const next: Errors = {};
    if (current === 0) {
      if (!data.appointmentType) next.appointmentType = "Please choose the type of visit.";
    }
    if (current === 1) {
      if (!data.firstName.trim()) next.firstName = "Enter your first name.";
      if (!data.lastName.trim()) next.lastName = "Enter your last name.";
      if (!data.email.trim()) next.email = "Enter your email address.";
      else if (!emailRe.test(data.email)) next.email = "Enter a valid email address.";
      if (!data.phone.trim()) next.phone = "Enter a phone number we can reach you at.";
    }
    if (current === 2) {
      if (!data.location) next.location = "Choose a preferred location.";
      if (!data.preferredDate) next.preferredDate = "Choose a preferred date.";
    }
    if (current === 3) {
      if (!data.consent) next.consent = "Please confirm you understand this is a request, not a confirmed booking.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function next() {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(3)) return;
    // Demo only — no network request is made. Log for transparency.
    // eslint-disable-next-line no-console
    console.info("[PRATHAM demo] Appointment request (not sent):", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-healing-teal/20 bg-white p-8 text-center shadow-soft md:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-healing-teal/12 text-healing-teal">
          <Icon name="check-circle" className="h-9 w-9" aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-navy">Request received</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          Thank you, {data.firstName || "friend"}. A care coordinator would normally reach out within
          one business day to confirm your appointment. This is a demonstration, so no request was
          actually submitted.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/">Return home</Button>
          <Button
            variant="secondary"
            onClick={() => {
              setData(initialState);
              setStep(0);
              setSubmitted(false);
            }}
          >
            Start another request
          </Button>
        </div>
      </div>
    );
  }

  const filteredDoctors = data.specialty
    ? doctors.filter((d) => d.specialty === data.specialty)
    : doctors;

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft md:p-8"
    >
      <Stepper steps={steps} current={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <fieldset className="space-y-5">
              <legend className="text-lg font-semibold text-navy">What kind of care do you need?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {appointmentTypes.map((type) => {
                  const selected = data.appointmentType === type.value;
                  return (
                    <button
                      type="button"
                      key={type.value}
                      onClick={() => update("appointmentType", type.value)}
                      aria-pressed={selected}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        selected
                          ? "border-healing-teal bg-healing-teal/5 ring-2 ring-healing-teal/30"
                          : "border-ink/12 hover:border-healing-teal/40 hover:bg-pearl"
                      }`}
                    >
                      <span className="block font-semibold text-navy">{type.label}</span>
                      <span className="mt-1 block text-sm text-ink/60">{type.description}</span>
                    </button>
                  );
                })}
              </div>
              {errors.appointmentType && (
                <p role="alert" className="text-sm font-medium text-[#c14a37]">
                  {errors.appointmentType}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Specialty (optional)" htmlFor="specialty">
                  <Select
                    id="specialty"
                    value={data.specialty}
                    onChange={(e) => update("specialty", e.target.value)}
                  >
                    <option value="">Any specialty</option>
                    {specialtyOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </Select>
                </FormField>
                <FormField label="Preferred doctor (optional)" htmlFor="doctor">
                  <Select
                    id="doctor"
                    value={data.doctor}
                    onChange={(e) => update("doctor", e.target.value)}
                  >
                    <option value="">No preference</option>
                    {filteredDoctors.map((d) => (
                      <option key={d.slug} value={d.slug}>{d.name} — {d.specialty}</option>
                    ))}
                  </Select>
                </FormField>
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset className="space-y-5">
              <legend className="text-lg font-semibold text-navy">Tell us about you</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="First name" htmlFor="firstName" required error={errors.firstName}>
                  <Input
                    id="firstName"
                    value={data.firstName}
                    autoComplete="given-name"
                    onChange={(e) => update("firstName", e.target.value)}
                    aria-invalid={!!errors.firstName}
                  />
                </FormField>
                <FormField label="Last name" htmlFor="lastName" required error={errors.lastName}>
                  <Input
                    id="lastName"
                    value={data.lastName}
                    autoComplete="family-name"
                    onChange={(e) => update("lastName", e.target.value)}
                    aria-invalid={!!errors.lastName}
                  />
                </FormField>
                <FormField label="Email" htmlFor="email" required error={errors.email}>
                  <Input
                    id="email"
                    type="email"
                    value={data.email}
                    autoComplete="email"
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                </FormField>
                <FormField label="Phone" htmlFor="phone" required error={errors.phone}>
                  <Input
                    id="phone"
                    type="tel"
                    value={data.phone}
                    autoComplete="tel"
                    onChange={(e) => update("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                  />
                </FormField>
                <FormField label="Date of birth (optional)" htmlFor="dob" className="sm:col-span-2 sm:max-w-[15rem]">
                  <Input
                    id="dob"
                    type="date"
                    value={data.dob}
                    autoComplete="bday"
                    onChange={(e) => update("dob", e.target.value)}
                  />
                </FormField>
              </div>
              <p className="flex items-start gap-2 rounded-2xl bg-pearl p-4 text-sm text-ink/70">
                <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-healing-teal" aria-hidden />
                Your information is only used to coordinate care. In this demo, nothing is transmitted or stored.
              </p>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="space-y-5">
              <legend className="text-lg font-semibold text-navy">Location & timing</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Preferred location" htmlFor="location" required error={errors.location}>
                  <Select
                    id="location"
                    value={data.location}
                    onChange={(e) => update("location", e.target.value)}
                    aria-invalid={!!errors.location}
                  >
                    <option value="">Choose a campus</option>
                    {locations.map((l) => (
                      <option key={l.slug} value={l.slug}>{l.name}</option>
                    ))}
                  </Select>
                </FormField>
                <FormField label="New to PRATHAM?" htmlFor="isNewPatient">
                  <Select
                    id="isNewPatient"
                    value={data.isNewPatient}
                    onChange={(e) => update("isNewPatient", e.target.value)}
                  >
                    <option value="">Prefer not to say</option>
                    <option value="new">I'm a new patient</option>
                    <option value="returning">I'm a returning patient</option>
                  </Select>
                </FormField>
                <FormField label="Preferred date" htmlFor="preferredDate" required error={errors.preferredDate}>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={data.preferredDate}
                    onChange={(e) => update("preferredDate", e.target.value)}
                    aria-invalid={!!errors.preferredDate}
                  />
                </FormField>
                <FormField label="Preferred time" htmlFor="preferredTime">
                  <Select
                    id="preferredTime"
                    value={data.preferredTime}
                    onChange={(e) => update("preferredTime", e.target.value)}
                  >
                    <option value="">Any time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </Select>
                </FormField>
              </div>
              <FormField label="What brings you in? (optional)" htmlFor="reason" hint="Share anything that helps us prepare. Avoid sensitive details in this demo.">
                <Textarea
                  id="reason"
                  value={data.reason}
                  onChange={(e) => update("reason", e.target.value)}
                  rows={4}
                />
              </FormField>
            </fieldset>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-navy">Review your request</h2>
              <dl className="grid gap-x-6 gap-y-3 rounded-2xl bg-pearl p-5 sm:grid-cols-2">
                <Summary label="Visit type" value={appointmentTypes.find((t) => t.value === data.appointmentType)?.label} />
                <Summary label="Specialty" value={data.specialty || "Any"} />
                <Summary label="Doctor" value={doctors.find((d) => d.slug === data.doctor)?.name || "No preference"} />
                <Summary label="Name" value={`${data.firstName} ${data.lastName}`.trim()} />
                <Summary label="Email" value={data.email} />
                <Summary label="Phone" value={data.phone} />
                <Summary label="Location" value={locations.find((l) => l.slug === data.location)?.name} />
                <Summary label="Preferred date" value={data.preferredDate} />
                <Summary label="Preferred time" value={data.preferredTime || "Any time"} />
              </dl>

              <label className="flex items-start gap-3 rounded-2xl border border-ink/12 p-4">
                <input
                  type="checkbox"
                  checked={data.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-1 h-5 w-5 rounded border-ink/30 text-healing-teal focus-visible:ring-2 focus-visible:ring-aqua"
                  aria-invalid={!!errors.consent}
                />
                <span className="text-sm text-ink/75">
                  I understand this is a request for an appointment, not a confirmed booking, and that
                  PRATHAM is a fictional demonstration. No medical advice is provided here.
                </span>
              </label>
              {errors.consent && (
                <p role="alert" className="text-sm font-medium text-[#c14a37]">
                  {errors.consent}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav controls */}
      <div className="mt-8 flex items-center justify-between border-t border-ink/8 pt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          disabled={step === 0}
          leftIcon={<Icon name="chevron-left" className="h-4 w-4" aria-hidden />}
        >
          Back
        </Button>
        {step < steps.length - 1 ? (
          <Button type="button" onClick={next} rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
            Continue
          </Button>
        ) : (
          <Button type="submit" rightIcon={<Icon name="check" className="h-4 w-4" aria-hidden />}>
            Submit request
          </Button>
        )}
      </div>
    </form>
  );
}

function Summary({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</dt>
      <dd className="mt-0.5 text-navy">{value || "—"}</dd>
    </div>
  );
}
