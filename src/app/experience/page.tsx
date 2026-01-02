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
                  <span className="font-semibold">
                    Research Analyst
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  The Brookings Institution
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2024 – Present</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Washington, DC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Co-authored research papers and comment letters with
                  economists and lawyers on the Inflation Reduction Act,
                  pharmaceutical import security investigations, and health
                  insurance price transparency
                </li>
                <li className="px-1">
                  Built a data pipeline integrating historical FDA drug data
                  with real-time updates and developed an interactive dashboard
                  visualizing U.S. drug shortage trends
                </li>
                <li className="px-1">
                  Managed the full intern hiring process from application review
                  to final decision and provided mentorship and supervision to
                  the 2 selected interns
                </li>
                <li className="px-1">
                  Improved data access by web scraping U.S. prescription drug
                  policy information from government websites, SEC reports, and
                  court rulings
                </li>
              </ol>
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
                  Led an innovative research project using variational
                  autoencoders (a type of artificial neural network) to predict
                  counterfactual campaign outcomes in a company-wide AI
                  initiative
                </li>
                <li className="px-1">
                  Developed full-stack web application features to serve
                  enterprise customers such as McDonald’s, Walmart, and BoA,
                  allowing large-scale document permission management, lookup,
                  update, upload, and deletion services
                </li>
                <li className="px-1">
                  Collaborated with UX designers and product managers to revamp
                  the application frontend, refactoring CSS, HTML, and
                  JavaScript to meet industry-leading accessibility standards
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
                  <span className="font-semibold">Data Science Intern</span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Carta Healthcare
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">May 2022 – Aug 2022</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">San Francisco, CA</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Built a client-facing dashboard that tracked 10 key
                  performance metrics and presented it in a live product
                  demonstration
                </li>
                <li className="px-1">
                  Created a reusable template that enabled engineers to
                  auto-generate webpages for the pre-training process in a
                  machine learning workflow
                </li>
                <li className="px-1">
                  Implemented an automated data-cleaning pipeline that reduced
                  bioinformaticians’ housekeeping time by 30%
                </li>
                <li className="px-1">
                  Developed infrastructure that ran simulations of patient
                  profiles 100x faster, reducing manual effort by 50%
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
                  <span className="mr-1">May 2021 – Aug 2021</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Co-led a team of 3 undergraduate and postdoc students to
                  develop a rare disease genomic data science project
                </li>
                <li className="px-1">
                  Identified 20+ significant genes associated with a rare
                  neurological disorder from a pool of 35,000, using statistical
                  methods such as effect size shrinkage and blind dispersion
                  estimation
                </li>
                <li className="px-1">
                  Mentored 2 incoming first-year researchers and designed
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
                  <span className="mr-1">Aug 2021 – May 2023</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Co-authored an internal tutorial on recurrent event analysis
                  examining instances of alcohol-related complications after
                  bariatric surgeries
                </li>
                <li className="px-1">
                  Investigated algorithmic bias of inappropriate proxy variables
                  (e.g., race, gender, and ZIP Code) in Electronic Health Record
                  data using simulation
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
