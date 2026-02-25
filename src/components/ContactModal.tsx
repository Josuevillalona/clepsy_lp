"use client";

import { createContext, useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactContextValue {
    open: () => void;
}

const ContactContext = createContext<ContactContextValue>({
    open: () => { },
});

export function useContact() {
    return useContext(ContactContext);
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !message) {
            setError("Please fill out all fields.");
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Something went wrong");
                return;
            }

            setSubmitted(true);

            // Auto-close after 2 seconds on success and reset form
            setTimeout(() => {
                setModalOpen(false);
                setTimeout(() => {
                    setSubmitted(false);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setMessage("");
                }, 300);
            }, 2000);
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <ContactContext.Provider value={{ open: () => setModalOpen(true) }}>
            {children}

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm p-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative w-full max-w-lg rounded-3xl border border-gold/20 bg-surface p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute right-5 top-5 text-cream-muted hover:text-white transition-colors p-2"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-6">
                            <h2 className="font-display text-2xl font-bold text-white">
                                Contact Us
                            </h2>
                            <p className="mt-2 text-sm text-cream-muted">
                                Have a question or feedback? We&apos;d love to hear from you.
                            </p>
                        </div>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="firstName" className="text-xs font-semibold text-cream-muted uppercase tracking-wider">First Name</label>
                                        <Input
                                            id="firstName"
                                            type="text"
                                            placeholder="Jane"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            disabled={submitting}
                                            className="rounded-xl border-gold/20 bg-white/5 px-4 focus:border-gold"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="lastName" className="text-xs font-semibold text-cream-muted uppercase tracking-wider">Last Name</label>
                                        <Input
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            disabled={submitting}
                                            className="rounded-xl border-gold/20 bg-white/5 px-4 focus:border-gold"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="email" className="text-xs font-semibold text-cream-muted uppercase tracking-wider">Email Address</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="jane@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={submitting}
                                        className="rounded-xl border-gold/20 bg-white/5 px-4 focus:border-gold"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="message" className="text-xs font-semibold text-cream-muted uppercase tracking-wider">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="How can we help?"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        disabled={submitting}
                                        className="flex w-full rounded-xl border border-gold/20 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>

                                {error && (
                                    <p className="text-sm text-red-400 text-center animate-pulse">{error}</p>
                                )}

                                <Button
                                    type="submit"
                                    disabled={submitting}
                                    className="mt-2 rounded-xl bg-gold px-8 py-6 font-semibold text-midnight hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,162,89,0.4)] disabled:opacity-50"
                                >
                                    {submitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        ) : (
                            <div className="mt-4 rounded-2xl border border-teal/30 bg-teal/10 p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal/20 text-teal">
                                    ✓
                                </div>
                                <p className="font-display text-xl font-semibold text-white">Message Sent!</p>
                                <p className="mt-2 text-sm text-cream-muted">Thanks for reaching out. We&apos;ll get back to you soon.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </ContactContext.Provider>
    );
}
