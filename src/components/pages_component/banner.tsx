import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 mb-28 px-6 md:px-0  md:py-10">
      <div className="inline-block max-w-xl text-left justify-center">
        <span className={title()}>Ashek Mahmud&nbsp;</span>
        <span className={title({ color: "violet" })}>Ashik&nbsp;</span>
        <br />
        <span className={title()}>Full Stack Developer</span>
        <div className={subtitle({ class: "mt-4" })}>
          &quot;Code smarter, not harder.&quot; 💡🤖
        </div>
      </div>

      <div className="flex flex-start  w-full  gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "sm",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Resume
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "sm" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div> */}
    </section>
  );
}
