import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Privacy Policy | Clepsy",
    description: "Privacy Policy for Clepsy, outlining our data practices and your rights.",
};

export default function PrivacyPolicy() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-cream-muted">
                        Last updated: February 24, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-gold max-w-none prose-headings:font-display prose-headings:font-semibold prose-p:text-cream-muted prose-li:text-cream-muted prose-a:text-gold hover:prose-a:text-gold/80 prose-a:transition-colors">
                    <p>
                        At <strong>Clepsy</strong>, we believe in helping you reclaim your time while fiercely protecting your privacy.
                        This Privacy Policy outlines how we collect, use, and protect your personal data in compliance with the General
                        Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other global privacy laws.
                    </p>

                    <hr className="my-10 border-gold/10" />

                    <h2>1. Identity of Controller</h2>
                    <p>
                        <strong>Clepsy</strong><br />
                        Data Protection Officer: <a href="mailto:privacy@clepsy.com">privacy@clepsy.com</a><br />
                        General Contact: <a href="mailto:support@clepsy.com">support@clepsy.com</a>
                    </p>

                    <h2>2. Data We Collect</h2>
                    <p>
                        Following the principle of data minimization, we only collect what is strictly necessary:
                    </p>
                    <ul>
                        <li><strong>Account Data:</strong> Email address for waitlist registration and eventual account creation.</li>
                        <li><strong>App Usage Data:</strong> Time spent on "redirected" apps and "blocked" apps. This is core to Clepsy's operational mechanics (earning time to unlock apps).</li>
                        <li><strong>Technical Data:</strong> Basic device identifiers required for screen time tracking mechanisms to function securely on your device.</li>
                    </ul>

                    <h2>3. Legal Basis for Processing</h2>
                    <p>We process your data based on:</p>
                    <ul>
                        <li><strong>Consent:</strong> For joining our waitlist and receiving marketing communications.</li>
                        <li><strong>Contract:</strong> For providing the core Clepsy service (tracking positive app usage to unlock recreational apps).</li>
                        <li><strong>Legitimate Interest:</strong> For preventing fraud, ensuring security, and understanding aggregate app performance.</li>
                    </ul>

                    <h2>4. How We Use Your Data</h2>
                    <p>Your data is used strictly for:</p>
                    <ul>
                        <li>Providing the core time-locking and unlocking mechanics of the Clepsy app.</li>
                        <li>Sending you updates about our launch via our waitlist.</li>
                        <li>Improving the functionality and stability of our services.</li>
                    </ul>
                    <p><strong>We do NOT use your app usage data for targeted advertising, nor do we sell it to data brokers.</strong></p>

                    <h2>5. Data Sharing</h2>
                    <p>We only share data with essential service providers necessary to operate Clepsy:</p>
                    <ul>
                        <li><strong>Database Providers:</strong> Upstash (Redis) for managing waitlist registrations securely.</li>
                        <li><strong>Analytics Providers:</strong> Privacy-first analytics to understand aggregate, anonymized landing page traffic.</li>
                    </ul>
                    <p><em>We strictly enforce Data Processing Agreements with all third-party vendors.</em></p>

                    <h2>6. Your Privacy Rights</h2>
                    <p>Depending on your jurisdiction (e.g., GDPR, CCPA), you hold strict rights over your personal data:</p>
                    <ul>
                        <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
                        <li><strong>Right to Deletion:</strong> You can request that we erase your personal data ("Right to be Forgotten").</li>
                        <li><strong>Right to Object:</strong> You can object to processing based on legitimate interest or direct marketing.</li>
                        <li><strong>Right to Data Portability:</strong> You can request your data in a structured, machine-readable format.</li>
                        <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent for waitlist emails at any time easily.</li>
                    </ul>
                    <p>To exercise any of these rights, contact us at <a href="mailto:privacy@clepsy.com">privacy@clepsy.com</a>. We respond to all requests within 30 days.</p>

                    <h2>7. Data Retention</h2>
                    <ul>
                        <li><strong>Waitlist Data:</strong> Maintained until launch, or until you withdraw consent.</li>
                        <li><strong>App Usage Data:</strong> Maintained only as long as you use the app. Aggregate data is anonymized.</li>
                        <li><strong>Account Deletion:</strong> Data is purged within 30 days of account deletion, barring legal obligations.</li>
                    </ul>

                    <h2>8. Security and Privacy by Design</h2>
                    <p>
                        We deploy industry-standard encryption at rest and in transit.
                        Our architecture explicitly applies Privacy by Design (PbD) principles. We calculate screen time on-device where possible, transmitting only the minimum necessary data to sync your Clepsy balance across devices.
                    </p>

                    <h2>9. International Transfers</h2>
                    <p>
                        If data is transferred internationally (e.g., to US-based servers), we rely on Standard Contractual Clauses (SCCs) approved by the European Commission to ensure adequate protection.
                    </p>

                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this policy as Clepsy evolves. Material changes will be communicated via email prior to taking effect.
                    </p>
                </div>
            </div>
        </div>
    );
}
