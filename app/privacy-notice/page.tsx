export default function PrivacyNoticePage() {
  return (
    <main className="grain pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] overflow-hidden">
        <div className="absolute left-[10%] top-10 h-52 w-52 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute right-[12%] top-6 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl justify-center px-4 pt-8 sm:px-6 lg:px-8">
        <a className="page-logo-shell reveal" href="/" aria-label="fefe LABS home">
          <img src="/brand/fefeLabs-icon.png" alt="fefe LABS" className="page-logo-mark" />
        </a>
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="glass-panel reveal rounded-[2rem] p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.45)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Privacy Policy</p>
          <h1 className="display-font mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Privacy Notice
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500">Last updated July 18, 2022</p>

          <div className="mt-8 space-y-6 text-base leading-7 text-slate-700">
            <p>
              Thank you for choosing to be part of our community at fefe LABS (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal information and your
              right to privacy. If you have any questions or concerns about this privacy notice or our practices with
              regard to your personal information, please contact us at{" "}
              <a className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4" href="mailto:fefelab.app@gmail.com">
                fefelab.app@gmail.com
              </a>
              .
            </p>

            <p>This privacy notice describes how we might use your information if you:</p>

            <div className="space-y-2 rounded-3xl border border-white/70 bg-white/60 p-5">
              <p>Download and use our mobile application — Velib&apos; Now !</p>
              <p>Download and use our mobile application — Magic Shades</p>
              <p>Download and use our mobile application — Baby Match</p>
              <p>Download and use our mobile application — Words Puzzle</p>
            </div>

            <p>
              Engage with us in other related ways ― including any sales, marketing, or events. In this privacy
              notice, if we refer to:
            </p>

            <p>
              &quot;App,&quot; we are referring to any application of ours that references or links to this policy,
              including any listed above. &quot;Services,&quot; we are referring to our App, and other related
              services, including any sales, marketing, or events.
            </p>

            <p>
              The purpose of this privacy notice is to explain to you in the clearest way possible what information we
              collect, how we use it, and what rights you have in relation to it. If there are any terms in this
              privacy notice that you do not agree with, please discontinue use of our Services immediately.
            </p>

            <p>
              Please read this privacy notice carefully, as it will help you understand what we do with the
              information that we collect.
            </p>

            <section className="space-y-3">
              <h2 className="display-font text-2xl font-semibold text-slate-900">1. What information do we collect?</h2>
              <p>
                We don&apos;t collect personal information related to you. The only data available to the
                &quot;Baby Match&quot; app is data that you either input directly yourself, or generate through use of
                the app. &quot;Baby Match&quot; collects the following data: liked names.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="display-font text-2xl font-semibold text-slate-900">
                2. What is our stance on third-party websites?
              </h2>
              <p>
                In short: We are not responsible for the safety of any information that you share with third-party
                providers who advertise, but are not affiliated with, our Website.
              </p>
              <p>
                The App may contain advertisements from third parties that are not affiliated with us and which may
                link to other websites, online services or mobile applications. We cannot guarantee the safety and
                privacy of data you provide to any third parties. Any data collected by third parties is not covered by
                this privacy notice. We are not responsible for the content or privacy and security practices and
                policies of any third parties, including other websites, services or applications that may be linked to
                or from the App. You should review the policies of such third parties and contact them directly to
                respond to your questions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="display-font text-2xl font-semibold text-slate-900">
                3. How can you contact us about this notice?
              </h2>
              <p>
                If you have questions or comments about this notice, you may email us at{" "}
                <a className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4" href="mailto:fefelab.app@gmail.com">
                  fefelab.app@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
