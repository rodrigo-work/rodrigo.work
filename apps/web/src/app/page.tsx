import Image from "next/image";
import { socialLinks, metaData } from "@/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src={metaData.avatar ?? "/profile.png"}
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Node.js Senior Developer
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Com 10 anos de experiência em desenvolvimento, especializei-me em
          Node.js, JavaScript e TypeScript, com foco em APIs escaláveis,
          segurança avançada e monitoramento de microsserviços. Minha expertise
          abrange uma vasta gama de tecnologias, incluindo AWS para
          infraestrutura em nuvem e Docker/Kubernetes para gerenciar ambientes
          complexos de microsserviços.
        </p>
        <p>
          {/* <a href={socialLinks.github} target="_blank">
            open-source
          </a> */}
          Sou um entusiasta de soluções de autenticação segura e monitoração de
          alta performance, com um histórico de desenvolvimento de APIs RESTful
          otimizadas para alto volume e projetos complexos, como marketplaces e
          e-commerces. Além disso, desenvolvo soluções personalizadas que
          integram cache, escalabilidade e geolocalização, sempre visando a
          melhor experiência do usuário e performance.
        </p>
        {/*  <p>
          A clean, fast, and lightweight portfolio template built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
          Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
          <a
            target="_blank"
            href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          Nextfolio is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your Nextfolio site with Vercel in minutes and follow the set up
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          .
        </p>
      */}
      </div>
    </section>
  );
}
