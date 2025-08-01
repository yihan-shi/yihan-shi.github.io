import Link from 'next/link'

export default function Publications() {
  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      <span className="text-3xl font-medium">Publications</span>
      <ol className="space-y-4 pt-6 text-sm">
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://www.brookings.edu/articles/us-drug-supply-chain-exposure-to-china"
                    rel="noopener noreferrer"
                    target="_blank">
                    US drug supply chain exposure to China
                  </Link>’. Wosińska ME, <span className="font-bold">Shi Y</span>
                </li>
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://www.brookings.edu/articles/cumulative-net-earnings-of-drugs-selected-or-likely-to-be-selected-for-negotiation"
                    rel="noopener noreferrer"
                    target="_blank">
                    Cumulative net earnings of drugs selected or likely to be selected for negotiation
                  </Link>’. Frank RG, <span className="font-bold">Shi Y</span>
                </li>
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://doi.org/10.1172/jci.insight.170444"
                    rel="noopener noreferrer"
                    target="_blank">
                    Respiratory neuropathology in Spinocerebellar ataxia type 7
                  </Link>’. Biswas DD, <span className="font-bold">Shi Y</span>, El Haddad L, Sethi R, Huston M,
                  Kehoe S, Scarrow ER, Strickland LM, Pucci LA, Dhindsa
                  J, Hunanyan A, La Spada AR, ElMallah MK.
                </li>
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://doi.org/10.1016/j.resp.2024.104282"
                    rel="noopener noreferrer"
                    target="_blank">
                    Respiratory characterization of a humanized Duchenne muscular dystrophy mouse model
                  </Link>’. Angela L. Roger, Debolina D. Biswas,
                  Meredith L Huston, Davina Le, Aidan M. Bailey, Logan A. Pucci, <span className="font-bold">Yihan Shi</span>, Jacqueline Robinson-Hamm, Charles A. Gersbach, Mai K. ElMallah.
                </li>
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://doi.org/10.1096/fasebj.2022.36.S1.R2442"
                    rel="noopener noreferrer"
                    target="_blank">
                    Accumulation of pathological Ataxin-7 in the medulla leads to hypoglossal (XII) motor unit pathology
                  </Link>’. Biswas DD, Strickland LM, Dhindsa J, <span className="font-bold">Shi Y</span>, Sethi R, Scarrow ER, Kehoe S, Lai E, ElMallah MK.
                </li>
                <li className="px-1">
                  ‘<Link
                    className="underline"
                    href="https://drive.google.com/file/d/1XVAjCAbA0CpmVhgnWeqifdWl5D1oNRpZ/view"
                    rel="noopener noreferrer"
                    target="_blank">
                    Investigate the impact of Confounding Medical Interventions (CMI) in electronic health records (EHR) data
                  </Link>’. <span className="font-bold">Shi Y</span>, Goldstein B. <span className="font-bold">[Undergraduate Honors Thesis]</span>
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
