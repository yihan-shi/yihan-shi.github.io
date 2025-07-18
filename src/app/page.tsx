import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaRegFolderOpen,
} from "react-icons/fa";
import CalButton from "./components/cal-button";
import Link from "next/link";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div>
        <p>
          <span className="block text-xl">Hi, I’m</span>
          <span className="block py-2 text-3xl font-medium">Yihan Shi!</span>
          <span className="max-w-prose py-2">
          Based in Washington, D.C., I serve as a Senior Research Assistant at
          Brookings, focusing on health care policy research. Previously, I
          developed enterprise applications at Mastercard Data & Services, collaborating
          with clients like McDonald’s, Walmart, and Bank of America. I hold a B.S. in
          Statistics from Duke University, with minors in Computer Science and
          Neuroscience. Beyond my professional endeavors, I enjoy playing the
          piano, capturing moments through photography, and experimenting with
          new recipes in the kitchen. Feel free to explore my work and reach out
          if you’d like to connect or collaborate!
          </span>
        </p>
        <div className="py-3">
          <div className="flex-col space-x-1 py-2">
            <CalButton />
            <Link
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-1 rounded-full border-2 border-[#52414c] px-2 py-1 transition hover:border-[#978d94] hover:text-[#978d94]">
                <FaRegFolderOpen className="mr-1 inline-block align-middle" />
                <span className="align-middle">View my Résumé</span>
              </button>
            </Link>
            <Link
              href="mailto:yihan.shiwork@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="my-1 rounded-full border-2 border-[#52414c] px-2 py-1 transition hover:border-[#978d94] hover:text-[#978d94]">
                <FaRegEnvelope className="mr-1 inline-block align-middle" />
                <span className="align-middle">Email Me</span>
              </button>
            </Link>
          </div>
          <div className="py-4">
            <ul className="space-x-4 px-1">
              <li className="inline-block transition hover:text-[#978d94]">
                <Link
                  href="https://www.instagram.com/keep_lifepieces/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6" />
                </Link>
              </li>
              <li className="inline-block transition hover:text-[#978d94]">
                <Link
                  href="https://www.linkedin.com/in/yihan-shi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              </li>
              <li className="inline-block transition hover:text-[#978d94]">
                <Link
                  href="https://github.com/yihan-shi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}
