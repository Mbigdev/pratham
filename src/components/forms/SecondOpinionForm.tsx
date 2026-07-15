"use client";

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cancerTypes } from "@/lib/data";

type State = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cancerType: string;
  diagnosisDate: string;
  currentTreatment: string;
  question: string;
  hasRecords: string;
  consent: boolean;
};

const initial: State = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  cancerType: "",
  diagnosisDate: "",
  currentTreatment: "",
  question: "",
  hasRecords: "",
  consent: false,
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SecondOpinionForm() {
  const [data, setData] = useState<State>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof State, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof State>(key: K, value: State[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof State, string>> = {};
    if (!data.firstName.trim()) next.firstName = "Enter your first name.";
    if (!data.lastName.trim()) next.lastName = "Enter your last name.";
    if (!data.email.trim()) next.email = "Enter your email.";
    else if (!emailRe.test(data.email)) next.email = "Enter a valid email.";
    if (!data.cancerType) next.cancerType = "Select the diagnosis.";
    if (!data.question.trim()) next.question = "Tell us what you'd like reviewed.";
    if (!data.consent) next.consent = "Please confirm you understand this is a demo.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // eslint-disable-next-line no-console
    console.info("[PRATHAM demo] Second opinion request (not sent):", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-healing-teal/20 bg-white p-8 text-center shadow-soft">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-healing-teal/12 text-healing-teal">
          <Icon name="check-circle" className="h-9 w-9" aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-navy">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          A second opinion coordinator would normally contact you within one business day to guide
          the record-sharing process. This is a demonstration, so nothing was submitted.
        </p>
        <Button href="/" className="mt-6">Return home</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First name" htmlFor="so-first" required error={errors.firstName}>
          <Input id="so-first" autoComplete="given-name" value={data.firstName} onChange={(e) => update("firstName", e.target.value)} aria-invalid={!!errors.firstName} />
        </FormField>
        <FormField label="Last name" htmlFor="so-last" required error={errors.lastName}>
          <Input id="so-last" autoComplete="family-name" value={data.lastName} onChange={(e) => update("lastName", e.target.value)} aria-invalid={!!errors.lastName} />
        </FormField>
        <FormField label="Email" htmlFor="so-email" required error={errors.email}>
          <Input id="so-email" type="email" autoComplete="email" value={data.email} onChange={(e) => update("email", e.target.value)} aria-invalid={!!errors.email} />
        </FormField>
        <FormField label="Phone" htmlFor="so-phone">
          <Input id="so-phone" type="tel" autoComplete="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} />
        </FormField>
        <FormField label="Diagnosis" htmlFor="so-cancer" required error={errors.cancerType}>
          <Select id="so-cancer" value={data.cancerType} onChange={(e) => update("cancerType", e.target.value)} aria-invalid={!!errors.cancerType}>
            <option value="">Select a diagnosis</option>
            {cancerTypes.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
            <option value="other">Other / not sure</option>
          </Select>
        </FormField>
        <FormField label="Approximate diagnosis date" htmlFor="so-date">
          <Input id="so-date" type="date" value={data.diagnosisDate} onChange={(e) => update("diagnosisDate", e.target.value)} />
        </FormField>
      </div>

      <FormField label="Current treatment status" htmlFor="so-treatment" className="mt-4">
        <Select id="so-treatment" value={data.currentTreatment} onChange={(e) => update("currentTreatment", e.target.value)}>
          <option value="">Prefer not to say</option>
          <option value="not-started">Haven&apos;t started treatment</option>
          <option value="in-treatment">Currently in treatment</option>
          <option value="completed">Completed treatment</option>
          <option value="deciding">Deciding between options</option>
        </Select>
      </FormField>

      <FormField
        label="What would you like our specialists to review?"
        htmlFor="so-question"
        required
        error={errors.question}
        hint="Describe your main questions. Please avoid sharing highly sensitive details in this demo."
        className="mt-4"
      >
        <Textarea id="so-question" rows={4} value={data.question} onChange={(e) => update("question", e.target.value)} aria-invalid={!!errors.question} />
      </FormField>

      <FormField label="Do you have medical records available to share?" htmlFor="so-records" className="mt-4">
        <Select id="so-records" value={data.hasRecords} onChange={(e) => update("hasRecords", e.target.value)}>
          <option value="">Select one</option>
          <option value="yes">Yes, I can share records</option>
          <option value="requesting">I&apos;m requesting them from my provider</option>
          <option value="no">Not yet</option>
        </Select>
      </FormField>

      <label className="mt-6 flex items-start gap-3 rounded-2xl border border-ink/12 p-4">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-ink/30 text-healing-teal focus-visible:ring-2 focus-visible:ring-aqua"
          aria-invalid={!!errors.consent}
        />
        <span className="text-sm text-ink/75">
          I understand PRATHAM is a fictional demonstration, that this form provides no medical
          advice, and that no information is transmitted or stored.
        </span>
      </label>
      {errors.consent && (
        <p role="alert" className="mt-2 text-sm font-medium text-[#c14a37]">{errors.consent}</p>
      )}

      <Button type="submit" className="mt-6" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
        Request second opinion
      </Button>
    </form>
  );
}
