import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 20, 2024</p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Gallball ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use Gallball for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose without authorization</li>
                <li>Attempt to reverse engineer any software contained in the Service</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You must be at least 18 years old to use this service</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Attempt to gain unauthorized access to other systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Subscription Fees</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Some aspects of the Service require payment of fees. You will be charged the applicable fees for your chosen subscription plan. All fees are non-refundable except as required by law.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Billing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Subscription fees will be billed in advance on a recurring basis. You authorize us to charge your chosen payment method for all fees incurred.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cancellation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Privacy and Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree that we can use such data in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Gallball and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this service is provided on an 'as is' basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Gallball, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-card border border-border/50 rounded-lg">
                <p className="font-medium">Gallball Legal Team</p>
                <p className="text-muted-foreground">Email: legal@gallball.com</p>
                <p className="text-muted-foreground">Address: 123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;