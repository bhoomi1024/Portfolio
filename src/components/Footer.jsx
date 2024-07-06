import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";

const CURRENT_YEAR = new Date().getFullYear();
const PERSONAL_WEBSITE_URL = "https://bhoomi.dev";
const GITHUB_URL = "https://github.com/your-github-url";
const LINKEDIN_URL = "https://linkedin.com/your-linkedin-url";
const PERPLEXITY_URL = "https://perplexity.com";

export default function Footer() {
  return (
    <footer className="bg-darkDesert text-lightDesert">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
        <span className="text-sm sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERSONAL_WEBSITE_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            Bhoomi.dev
          </a>
        </span>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERPLEXITY_URL}
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <SiPerplexity className="w-5 h-5" />
            <span className="sr-only">Perplexity Referral</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
