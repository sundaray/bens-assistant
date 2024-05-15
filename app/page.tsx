export default function Home() {
  return (
    <main className="flex-1 container max-w-3xl space-y-8">
      <section>
        <h2>Can you introduce yourself?</h2>
        <p className="mb-4">
          My name is Hemanta Sundaray. I&apos;m 37 years old, a husband, and a
          dad to a 2-year-old son. I live in Odisha, a state in the eastern part
          of India.
        </p>
        <p>
          For more than a decade, I worked in the fashion industry across
          various functions such as design, product merchandising, buying, and
          retail operations. However, in June 2022, I decided to quit and pursue
          programming. Since then, I have been freelancing as a technical writer
          for an edtech platform and building side projects, mostly AI wrappers.
        </p>
      </section>
      <section>
        <h2>
          That&apos;s great that you know how to code! Where can I see some of
          your AI projects?
        </h2>
        <p className="mb-4">
          Yes, I&apos;m a fullstack developer with a focus on modern web
          technologies. My primary tech stack includes TypeScript, React (via
          Next.js), Firebase, Supabase, shadcn/ui, and Tailwind CSS. I also have
          extensive experience working with various AWS services such as
          Fargate, Lambda, S3, SES, and SQS.
        </p>
        <p className="mb-4">
          So far, I&apos;ve developed the following three AI projects:
        </p>
        <ol className="list-decimal ml-8">
          <li>
            <a
              href="https://www.yapprz.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              yapprz.com
            </a>
            : Summarize YouTube comments with AI
          </li>
          <li>
            {" "}
            <a
              href="https://www.excelai.pro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              excelai.pro
            </a>
            : Work faster and smarter with Excel
          </li>
          <li>
            {" "}
            <a
              href="https://www.makeaudio.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              makeaudio.app
            </a>
            : Convert text to audio
          </li>
        </ol>
      </section>
    </main>
  );
}
