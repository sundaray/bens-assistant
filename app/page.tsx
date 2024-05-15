import { MotionMain, MotionSection } from "@/components/use-client";
import Image from "next/image";
import Ben from "@/images/ben-tossel.jpeg";

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <MotionMain
      variants={variants}
      initial="initial"
      animate="animate"
      className="flex-1 container max-w-3xl space-y-8 my-24"
    >
      <MotionSection variants={variants} className="text-sm">
        <p>
          <span className="font-bold">Interviewer:</span> Ben Tossel
        </p>
        <p>
          <span className="font-bold">Interviewee:</span> Hemanta Sundaray,{" "}
          <address className="inline-block">
            <a href="mailto:rawgrittt@gmail.com">rawgrittt@gmail.com, </a>
          </address>{" "}
          <a
            href="https://twitter.com/hemanta_io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:no-underline underline-offset-2"
          >
            @hemanta_io
          </a>
        </p>
        <p>
          <span className="font-bold">Role:</span> Assistant who uses AI
        </p>
      </MotionSection>{" "}
      <MotionSection variants={variants}>
        <div className="flex gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>Can you introduce yourself?</h2>
        </div>
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
          for{" "}
          <a
            href="https://kodekloud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:no-underline underline-offset-2"
          >
            KodeKloud
          </a>
          , an edtech platform that offers courses on DevOps and building side
          projects, mostly AI wrappers.
        </p>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>
            That&apos;s great that you know how to code! Where can I see some of
            your AI projects?
          </h2>
        </div>
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
        <ol className="list-decimal ml-8 mb-4 text-neutral-700">
          <li>
            <a
              href="https://www.yapprz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:no-underline underline-offset-2"
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
              className="text-blue-600 underline hover:no-underline underline-offset-2"
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
              className="text-blue-600 underline hover:no-underline underline-offset-2"
            >
              makeaudio.app
            </a>
            : Convert text to audio
          </li>
        </ol>
        <p>
          Through these projects, I gained a deep understanding of how to use
          various OpenAI APIs, including chat completion, text to speech, and
          vision.
        </p>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>
            What experience do you have using AI tools to automate tasks and
            workflows? Can you provide examples of how you&apos;ve done this
            successfully?
          </h2>
        </div>
        <p className="mb-4">
          I have extensive experience using AI tools to automate tasks and
          streamline workflows, particularly in the areas of coding, research,
          and writing. When ChatGPT was first launched, I had just started
          working as a freelance technical writer for an edtech platform. I
          quickly recognized the potential of AI to improve my productivity, so
          I began using ChatGPT to assist with research and drafting blog posts.
          While other writers were outputting 2-3 1500-word posts per month, I
          was writing 10. I had increased my productivity by 5 times.
        </p>
        <p className="mb-4">
          Over the course of several months, from December 2022 to July 2023, I
          deepened my expertise with ChatGPT, initially using the 3.5 model and
          later upgrading to GPT-4. Through hands-on experience, I developed a
          strong understanding of how to write effective prompts to get the best
          responses from the AI. I learned to work around its limitations and
          play to its strengths, which enabled me to consistently leverage the
          tool to produce high-quality work.
        </p>
        <p className="mb-4">
          As my freelance projects slowed down, I joined the AI bandwagon and
          started building personal projects, primarily AI wrappers. Once again,
          I relied on ChatGPT to support me with coding and troubleshooting.{" "}
        </p>
        <p className="mb-4">
          When Anthropic launched Claude, I was impressed by its writing
          capabilities and its willingness to follow instructions. I now use
          Claude 3 Opus extensively for coding, research and writing tasks,
          turning to GPT-4 as a complementary tool when Claude is unable to
          help.
        </p>
        <p className="mb-4">
          In addition to <span className="font-bold">ChatGPT</span> and{" "}
          <span className="font-bold">Claude</span>, I&apos;ve also explored{" "}
          <span className="font-bold">Gemini Pro</span>, but found that it
          didn&apos;t consistently deliver the same level of quality and
          insight.
        </p>
        <p className="mb-4">
          Throughout my journey with AI tools, I&apos;ve learned to quickly
          assess the strengths and weaknesses of each tool. While I have my
          go-to favourites in ChatGPT and Claude, I&apos;m confident in my
          ability to rapidly get up to speed on any AI tools that would be
          helpful in supporting your needs as an assistant.
        </p>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>Where are you located?</h2>
        </div>
        <p>I&apos;m located in India. </p>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>Does that have a good crossover with UK time?</h2>
        </div>
        <p className="mb-4">
          India Standard Time (IST) is 4 hours and 30 minutes ahead of the UK.
          Let&apos;s consider a typical UK workday of 8 hours from 10 AM to 7
          PM, with a one-hour lunch break. Here&apos;s how that translates to my
          time zone:
        </p>
        <ul className="list-disc ml-8 mb-4 leading-7 text-neutral-700">
          <li>When it&apos;s 10 AM in the UK, it&apos;s 2:30 PM for me.</li>
          <li>Your 7 PM end of day is 11:30 PM my time.</li>
        </ul>
        <p className="mb-4">
          So for the majority of your workday, I&apos;m awake and available.
          I&apos;m confident that my location won&apos;t be an obstacle, and
          I&apos;m committed to being responsive and accessible during the core
          hours that matter most for your workflow.
        </p>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>
            Are you aware what kind of tasks you will be doing as an assistant?
          </h2>
        </div>
        <p className="mb-4">
          Yes, I carefully reviewed the task list you shared on X, and I have a
          clear understanding of what the role entails. From what I gathered,
          some of the key responsibilities include:
        </p>
        <ul className="list-disc ml-8 mb-4 leading-7 text-neutral-700">
          <li>
            Conducting research on various topics and preparing
            briefings/summaries.
          </li>
          <li>
            Drafting and editing written content like blog posts, newsletters,
            social media posts.
          </li>
          <li>
            Managing Ben&apos;s calendar, scheduling appointments and meetings.
          </li>
          <li>Handling email correspondence and customer inquiries.</li>
          <li>
            Assisting with data entry, light bookkeeping and other
            administrative tasks as needed.
          </li>
          <li>
            Helping keep projects and initiatives on track by monitoring
            progress.
          </li>
          <li>
            Providing general support to Ben and the team across a range of
            areas.
          </li>
        </ul>
      </MotionSection>
      <MotionSection variants={variants}>
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={Ben}
            className="size-8 rounded-full object-cover object-center"
            alt="Interviewer avatar"
          />
          <h2>Why are you perfect for this job?</h2>
        </div>
        <p className="mb-4">
          I believe I&apos;m an excellent fit for this role for several reasons.
          First and foremost, I&apos;m a heavy AI user, which is one of the core
          requirements for this position. As I&apos;ve shared, I&apos;ve used AI
          in various ways to enhance my productivity in writing and coding.
        </p>
        <p className="mb-4">
          Moreover, my background as a technical writer aligns perfectly with
          the role&apos;s emphasis on drafting and editing different types of
          written content. You can check out my technical writing via this link{" "}
          <a
            href="https://www.makeaudio.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:no-underline underline-offset-2"
          >
            https://www.hemantasundaray.com/technical-writing
          </a>
        </p>
        <p className="mb-4">
          In addition to my writing skills, I&apos;m an advanced Excel and
          Google Sheets user. This&apos;ll help me efficiently handle data
          entry, bookkeeping, and other administrative tasks.
        </p>
        <p className="mb-4">
          Beyond these technical skills, I possess the soft skills and work
          ethic needed to thrive in this role. I&apos;m detail-oriented,
          proactive, and a self-starter who requires minimal supervision. I
          consistently go above and beyond to deliver exceptional value and
          drive positive results.
        </p>
        <p className="mb-4">
          If you have any further questions, I am just an email away. Please
          write back to me at{" "}
          <address className="inline-block">
            <a href="mailto:rawgrittt@gmail.com">rawgrittt@gmail.com</a>
          </address>{" "}
          .
        </p>
        <p>Thank you so much for your consideration.</p>
      </MotionSection>
      <MotionSection
        variants={variants}
        className="border rounded-lg p-4 bg-accent"
      >
        <p>
          <span className="font-bold">Note</span>: The initial draft for this
          interview was written by me. It was then refined and optimized for
          clarity and flow using Claude Opus 3.
        </p>
      </MotionSection>
    </MotionMain>
  );
}
