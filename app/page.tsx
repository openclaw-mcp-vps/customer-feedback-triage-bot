export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Customer Success Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Smart Routing of Feedback<br />to the Right Teams
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          FeedbackTriage uses AI to analyze customer feedback, score urgency, and automatically route issues to support, product, or engineering — so nothing falls through the cracks.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $35/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["AI Sentiment", "Instant analysis of tone and intent"],
            ["Auto-Routing", "Sends to the right team automatically"],
            ["Urgency Score", "Prioritize what matters most"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold mb-1 text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$35</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feedback ingestion",
              "AI sentiment & category analysis",
              "Auto-routing to support / product / eng",
              "Urgency scoring dashboard",
              "Custom routing rules",
              "Webhook & API access",
              "Team analytics & reports"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does feedback get into FeedbackTriage?",
              "Via our REST API or webhooks. Connect your support tools, forms, or any source that can send an HTTP request."
            ],
            [
              "Which teams can feedback be routed to?",
              "Out of the box: Support, Product, and Engineering. You can configure custom routing rules from the dashboard to match your org structure."
            ],
            [
              "How is urgency scored?",
              "Our AI model evaluates sentiment, keywords, customer tier, and recurrence to assign a 1–10 urgency score, helping teams prioritize critical issues first."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} FeedbackTriage. All rights reserved.
      </footer>
    </main>
  );
}
