import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Terms of Service | Clepsy",
    description: "Terms of Service for Clepsy. Read our rules and guidelines.",
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-midnight text-cream selection:bg-gold/30 selection:text-white">
            {/* Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal/5 blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-32">
                <Link href="/">
                    <Button
                        variant="ghost"
                        className="mb-10 -ml-4 gap-2 text-cream-muted hover:text-white hover:bg-white/5"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">
                        Legal
                    </p>
                    <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-cream-muted">
                        Last updated: February 24, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none prose-headings:font-display prose-headings:font-semibold prose-p:text-cream-muted prose-li:text-cream-muted prose-a:text-gold hover:prose-a:text-gold/80 prose-a:transition-colors">
                    <p>
                        Welcome to <strong>Clepsy</strong>. By accessing our website, joining our waitlist, or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
                    </p>

                    <hr className="my-10 border-gold/10" />

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using Clepsy (the "Service"), you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        Clepsy provides tools to help you manage your screen time by tracking usage of productive apps to unlock access to recreational apps. Currently, we are in a pre-launch waitlist phase. These Terms apply to our website and the future application.
                    </p>

                    <h2>3. User Conduct</h2>
                    <p>You agree not to use the Service to:</p>
                    <ul>
                        <li>Violate any local, state, national, or international law or regulation.</li>
                        <li>Interfere with or disrupt the Service or servers connected to the Service.</li>
                        <li>Attempt to bypass or circumvent the time-locking mechanisms provided by the Service for malicious purposes.</li>
                        <li>Submit false or misleading information when joining our waitlist or creating an account.</li>
                    </ul>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of the Service, including but not limited to the Clepsy name, logo, design, text, and graphics, are the exclusive property of Clepsy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>

                    <h2>5. Disclaimers and Limitation of Liability</h2>
                    <p>
                        <strong>The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</strong> We make no warranties, expressed or implied, regarding the reliability or accuracy of the Service.
                    </p>
                    <p>
                        In no event shall Clepsy, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Service.
                    </p>

                    <h2>6. Third-Party Links</h2>
                    <p>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Clepsy. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                    </p>

                    <h2>7. Termination</h2>
                    <p>
                        We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <h2>8. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                    </p>

                    <h2>9. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:support@clepsy.com">support@clepsy.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
