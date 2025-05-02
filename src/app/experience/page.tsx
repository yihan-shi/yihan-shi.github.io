import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      <span className="text-3xl font-medium">Experience</span>
      <ol className="space-y-4 pt-6 text-sm">
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/brookings.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">Senior Research Assistant</span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  The Brookings Institution
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2024 – Present</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Washington, D.C.</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/mastercard.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">Software Engineer</span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Mastercard Data & Services
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2023 – Aug 2024</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Arlington, VA</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Developed full-stack web application features using the .NET Framework
                  for enterprise customers such as McDonald’s, Walmart, and Bank of America,
                  enabling large-scale document permission management, lookup, editing,
                  uploading, and deletion services
                </li>
                <li className="px-1">
                  Revitalized user experience by refactoring CSS, HTML, JavaScript
                  code to align with industry-leading accessibility and UX standards
                </li>
                <li className="px-1">
                  Led an innovative research project using variational autoencoders
                  (a type of artificial neural network) to predict counterfactual
                  campaign outcomes as part of a company AI initiative
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/carta_healthcare.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Data Science Intern
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Carta Healthcare
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">May 2022 – Aug 2022</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">San Mateo, CA</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Developed a data visualization dashboard with 10 progress-tracking
                  metrics and presented at a client-facing Product Demo session
                </li>
                <li className="px-1">
                  Communicated core needs with the engineering team to speed up their
                  data querying process by designing SQLAlchemy wrappers to scalably query OLAP
                </li>
                <li className="px-1">
                  Designed a template and workflow document for 2 NLP scientists to
                  auto-generate HTML webpages for machine learning pre-training
                </li>
                <li className="px-1">
                  Reduced 30% of the time bioinformaticians spent on housekeeping tasks by
                  implementing a comprehensive and robust data cleaning process to reduce
                  platform test errors systematically
                </li>
                <li className="px-1">
                  Saved 50% of the manual labor of patient profile simulation by building
                  and maintaining an infrastructure that streamlined and scaled 100x simulation
                  based on real-world distribution multi-dimensional array of data in
                  PostgreSQL databases
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/duke_medicine.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Summer Data Science Fellow
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Duke University, School of Medicine
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Jun 2021 – Aug 2021</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Led a team of 3 undergraduate and postdoc students to craft a
                  rare disease genomic data science project end-to-end
                </li>
                <li className="px-1">
                  Identified 20 significant genes out of 35,000 using
                  generalized linear model and effect size shrinkage
                </li>
                <li className="px-1">
                  Publishing a manuscript (in review) and designing future
                  research projects with clinical researchers and pediatricians
                </li>
                <li className="px-1">
                  Mentored 2 incoming first-year researchers and drafted
                  biomedical data science starter projects
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/icons/duke.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Research & Teaching Assistant
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Duke University
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2021 – Aug 2023</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Authored technical tutorial for doctors on recurrent event
                  survival analysis methods to examine large claim datasets
                </li>
                <li className="px-1">
                  Authored manuscript (in review) on the impact of confounding
                  medical interventions in electronic health records data
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
