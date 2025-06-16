import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const chapters = [
  {
    "title": "Capítulo 1: Como o dinheiro ajuda a alcançar sonhos?",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 1", "url": "https://docs.google.com/forms/d/1iV6iZzHYEKHkYQH_F2DBK5hcRzJClEPvR7gDhY0YzUc/copy" },
      { "title": "Atividade 1.1", "url": "https://docs.google.com/forms/d/1TXvlZVs4vMbxRJjwD9-at2PhnfcbA9PXOj0I8CCbCLs/copy" },
      { "title": "Atividade 1.2", "url": "https://docs.google.com/forms/d/1YzcdDHQtg2Vn7KxyNavTQG8GDxU4M7hxJ69s0KssoSI/copy" },
      { "title": "Atividade 1.3", "url": "https://docs.google.com/forms/d/13Ohv3b1ApkX-PMvFNVDT_0YOWqnpwWb3iAmes8pYKXI/copy" },
      { "title": "Atividade 1.4", "url": "https://docs.google.com/forms/d/1Kvpy23JbYDCqtqQSntT0SLe7TJ_jaMus4GYZMu_3nUw/copy" },
      { "title": "Atividade 1.5", "url": "https://docs.google.com/forms/d/1XFZL2kc6OjjO77FqpGfv6ZLo9P3jRCjZ8s6QPT7V5x8/copy" },
      { "title": "Atividade 1.6", "url": "https://docs.google.com/forms/d/1APPhOFYkWzBsmLb10qIvKcupCIPCbl8c_eEqt6yb4fo/copy" },
      { "title": "Atividade 1.7", "url": "https://docs.google.com/forms/d/10T6CZ5QrmGzNKrfcUB6oHmnxqf_XyuTwoHc0BkRr948/copy" },
      { "title": "Exercícios do Capítulo 1", "url": "https://docs.google.com/forms/d/1uAyOaG6-mCic3wIB3d3QdPmdVF9HXlUX5P6hl1rcUp4/copy" }
    ]
  },
  {
    "title": "Capítulo 2: Futuro, aqui vou eu!",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 2", "url": "https://docs.google.com/forms/d/1MI7HaUcPe7Tur5zoDNLHMqRdZXczgRDr9GRe7wmidGY/copy" },
      { "title": "Atividade 2.1", "url": "https://docs.google.com/forms/d/1BRen0Twi_lEdf9RKSU7yWlsKDakl5Ey22zZt7Dx6nCQ/copy" },
      { "title": "Atividade 2.2", "url": "https://docs.google.com/forms/d/1L3PNIKge-L79BGEbRjBBkkMCxBihzvnC_pvDzIXE8OI/copy" },
      { "title": "Atividade 2.3", "url": "https://docs.google.com/forms/d/1Z9Y-PmrBHLxUOaILuc_8KKrGb5FexPWfIjh9BVCQfis/copy" },
      { "title": "Atividade 2.4", "url": "https://docs.google.com/forms/d/1-yihmRjt_P7IuMkPjfjubTrfzfmyyot29p7IvFQvhNQ/copy" },
      { "title": "Exercícios do Capítulo 2", "url": "https://docs.google.com/forms/d/1HOYLwV8GfbXK9W0atYCrNFeogxvEbTo0-fpzOAUxWbA/copy" }
    ]
  },
  {
    "title": "Capítulo 3: O que quero? Do que preciso?",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 3", "url": "https://docs.google.com/forms/d/1HYkwb--ImaReAsUcmc92VGHGgoLrXYOjeFZ5eUvAl0k/copy" },
      { "title": "Atividade 3.1", "url": "https://docs.google.com/forms/d/1qBA-mFhRQ7UinCmef7Sa2rljWJX4fzq-1vMvD2AoWpo/copy" },
      { "title": "Atividade 3.2", "url": "https://docs.google.com/forms/d/1XqIblvP1qigSf7zRcO7m2Ej1dD4UYv_U4KMmbrT1mL4/copy" },
      { "title": "Atividade 3.3", "url": "https://docs.google.com/forms/d/1mZpA9YwkLi372hJJc928nfLIsfHTDYd09QWM9PMrCpM/copy" },
      { "title": "Atividade 3.4", "url": "https://docs.google.com/forms/d/1Yz_1sOuBOT52FgjWHn2obvnMemVId7vC-VgLYcjntRQ/copy" },
      { "title": "Exercícios do Capítulo 3", "url": "https://docs.google.com/forms/d/1E6156z4l8iAM80b7NXR9hLOh760SF0cf_IJncXETX5k/copy" }
    ]
  },
  {
    "title": "Capítulo 4: O que ganho e o que gasto",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 4", "url": "https://docs.google.com/forms/d/1Q1NYo8dA6vwOV-V38owULsLduJXID3bbxdvusVOSbxY/copy" },
      { "title": "Atividade 4.1", "url": "https://docs.google.com/forms/d/1fzDmAW76PtmVUSFu7SwoIiTXgzIBgISA52sUgfNwbTo/copy" },
      { "title": "Atividade 4.2", "url": "https://docs.google.com/forms/d/1L4t1yUYBOVvggvZSOKAlbA4DzhSM6T6BP_nMjyG397E/copy" },
      { "title": "Atividade 4.3", "url": "https://docs.google.com/forms/d/1XGSJJJYpTwsXWtBC2W_OEZ9zVeSQ779z7t7cHy1DTqU/copy" },
      { "title": "Atividade 4.4", "url": "https://docs.google.com/forms/d/1qTm7VHEkajLKZnWXDgW8bAjo-QA4NQBuS_hdUyd7B_g/copy" },
      { "title": "Atividade 4.5", "url": "https://docs.google.com/forms/d/1pjnkJQcbJNqYmPo5crK4Un1YmYpNTZMTCSVS9mcAG5I/copy" },
      { "title": "Exercícios do Capítulo 4", "url": "https://docs.google.com/forms/d/1b1lONPvIYhBPF6psjBk6htsHTCN0yBFj44IpQBf_0jU/copy" }
    ]
  },
  {
    "title": "Capítulo 5: Pensar antes para consumir melhor",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 5", "url": "https://docs.google.com/forms/d/1DuUM-wWYzTyGxdFwV0p5hgP9LUiW5b5OAPUTSyKO5tE/copy" },
      { "title": "Atividade 5.1", "url": "https://docs.google.com/forms/d/1u_DIZpBnawxuprSiy7ZTKYEnV3AHlsTMoGEeMHjJ-0Y/copy" },
      { "title": "Atividade 5.2", "url": "https://docs.google.com/forms/d/10vPN8himz5cbiuHwHcH5cSIOXpz1DANauB1E9B_D3ik/copy" },
      { "title": "Atividade 5.3", "url": "https://docs.google.com/forms/d/1AHxImPYJcABu28qspyrk-8hVR7PiecxIQxcSmrE4XWg/copy" },
      { "title": "Atividade 5.4", "url": "https://docs.google.com/forms/d/1P0tZ1IZNWNHBUWYp1x1HkUhyn31mIvV5KrjhAIONUj4/copy" },
      { "title": "Exercícios do Capítulo 5", "url": "https://docs.google.com/forms/d/1mXSt0fS2qKQBCjl31woAgIpP1KPmxNcCe6KaLZSNY1Y/copy" }
    ]
  },
  {
    "title": "Capítulo 6: O preço do dinheiro",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 6", "url": "https://docs.google.com/forms/d/14B8SzTvyjNznxx2HUBP0aIxKEEoXuJWbgCL1owa3kI8/copy" },
      { "title": "Atividade 6.1", "url": "https://docs.google.com/forms/d/1I-AaC0JMdBs6xJFbQWTtErqz-HjIYvHhmSW09PGoRCY/copy" },
      { "title": "Atividade 6.2", "url": "https://docs.google.com/forms/d/1THJOYRTzuSAoJhfRTC4epKyoaOamcODTX6UrJQBKtGo/copy" },
      { "title": "Exercícios do Capítulo 6", "url": "https://docs.google.com/forms/d/163rhDKjuN6AQzQm_IxT9Bz5byfmDm8k_8nLKhR0YXXc/copy" }
    ]
  },
  {
    "title": "Capítulo 7: Fazendo o dinheiro render",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 7", "url": "https://docs.google.com/forms/d/1d-Xopscsxq85B8VOHNXNSGPI0kcCo2QypXEfmYhoeec/copy" },
      { "title": "Atividade 7.1", "url": "https://docs.google.com/forms/d/1iU7dOZvA5kiIITWrJNcCLySKzkb8IwDyPg-IU4qEj1w/copy" },
      { "title": "Atividade 7.2", "url": "https://docs.google.com/forms/d/1puSHzrCAq9YOT9BnElFenaKJvvRfpHt6sAOZeJlWYS0/copy" },
      { "title": "Atividade 7.3", "url": "https://docs.google.com/forms/d/19BaqMBYIUryyrNJHL1w14zYGmRdW3FHhJDtKI4eeuBQ/copy" },
      { "title": "Atividade 7.4", "url": "https://docs.google.com/forms/d/1w3cCpFizc6095NSjiWU2ahoOytwboeIoYAjoFzH7Oss/copy" },
      { "title": "Exercícios do Capítulo 7", "url": "https://docs.google.com/forms/d/1649WmBb4vemhjgTiTG-vUwHychTKkm_7Hiyp3QG3DGY/copy" }
    ]
  },
  {
    "title": "Capítulo 8: O que quero ser no futuro",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 8", "url": "https://docs.google.com/forms/d/1g_cYp-zbATcRcD7e-hwFCYfUlZ89pVcL0mDYM0_vSmI/copy" },
      { "title": "Atividade 8.1", "url": "https://docs.google.com/forms/d/1oYrRZhd2ZRvQcvd7285jtdJ5nDyMKFbF3QFirbtimQE/copy" },
      { "title": "Atividade 8.2", "url": "https://docs.google.com/forms/d/1hRJAG8L0_P4_0bvMqzyeHsuXCL2Ci-hxlEchtGfZGZg/copy" },
      { "title": "Atividade 8.3", "url": "https://docs.google.com/forms/d/1ajRAHZLKSsIyKVzkjVcmRc-eCcPfpGJMlP2BI_7Xuzw/copy" },
      { "title": "Exercícios do Capítulo 8", "url": "https://docs.google.com/forms/d/1Zf6MioTiqgiEO_HMVkGiG1bCInbtLr9ywrJ36JAJOek/copy" }
    ]
  },
  {
    "title": "Capítulo 9: Posso trabalhar enquanto estudo?",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 9", "url": "https://docs.google.com/forms/d/1xZzB0JSv1tly2h2-oXKU-v7uqJssykcJeT1Gt_ad3VU/copy" },
      { "title": "Atividade 9.1", "url": "https://docs.google.com/forms/d/1Ae0PrcLYCfEz1n1ogOxFhw6-envOf1OwcQ-bhb4b000/copy" },
      { "title": "Atividade 9.2", "url": "https://docs.google.com/forms/d/14x6YSOHhTaeBzXlS-BIMwdtNHfv7MJf8pW5gtqUd61w/copy" },
      { "title": "Atividade 9.3", "url": "https://docs.google.com/forms/d/1i7VvXAZPPnpe6H2KLbDbVQXF_TGT6RlqOMcPWC9aR5c/copy" },
      { "title": "Atividade 9.4", "url": "https://docs.google.com/forms/d/1ybqB5KggN8RHstCaJ3dqd2LIcp6dczYibiQnag1IW0s/copy" },
      { "title": "Atividade 9.5", "url": "https://docs.google.com/forms/d/1sMBzfTkqMgQrYp2pfv5rqkmSHV8GHEOFYpxjX41ATS8/copy" },
      { "title": "Atividade 9.6", "url": "https://docs.google.com/forms/d/1XmN2sSw7RGvSPCkCnsX_fNgmmkkhqnOKE6anaXzEViA/copy" },
      { "title": "Atividade 9.7", "url": "https://docs.google.com/forms/d/1OhlitxXtFvcBy8NkOQ0Yh8qpYPzx9n_cd-vUB7LiXDQ/copy" },
      { "title": "Exercícios do Capítulo 9", "url": "https://docs.google.com/forms/d/1x7NWdCD0h6cEnoRCgnqNH9vn4vwBTjpp4_d37xyGRkE/copy" }
    ]
  },
  {
    "title": "Capítulo 10: Para onde foi meu dinheiro?",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 10", "url": "https://docs.google.com/forms/d/1spzQGMBYvkhmbcNJ5MFnmKxg1nbpKqh3E8QxC5dbQdQ/copy" },
      { "title": "Atividade 10.1", "url": "https://docs.google.com/forms/d/1g5H1BBhLZqitNqBI1yMGsMY8hkgk3xz7PXfVIy5_Yl8/copy" },
      { "title": "Atividade 10.2", "url": "https://docs.google.com/forms/d/1-xFUUk8bT4z815i9wnvdvl2kID-33t4rwfgcTnFir0I/copy" },
      { "title": "Atividade 10.3", "url": "https://docs.google.com/forms/d/1QZFY4FtZw_W2IyO2A5urrLR-B2pCVTTRDOSgOtnC9t0/copy" },
      { "title": "Atividade 10.4", "url": "https://docs.google.com/forms/d/1g2oyM5o3ry4JRKyxrNrJoeO_3jHa1CWgsKO1XA3djlw/copy" },
      { "title": "Atividade 10.5", "url": "https://docs.google.com/forms/d/1gkNAoE06QBLPGs5pnoOjX1Si87O72t1mENz1c0nafI8/copy" },
      { "title": "Exercícios do Capítulo 10", "url": "https://docs.google.com/forms/d/1yDD0qSstoI3jTeWqTjM_2XZZ3-4VWk_HOvzpGBp5iYE/copy" }
    ]
  },
  {
    "title": "Capítulo 11: Posso ganhar dinheiro com o meu sonho",
    "activities": [
      { "title": "Atividade Extra de Nivelamento - Capítulo 11", "url": "https://docs.google.com/forms/d/1b0hoMkLyo4DxzdmnuuMxLFjtrWLW5ByFyhJJ7Y0reGY/copy" },
      { "title": "Atividade 11.1", "url": "https://docs.google.com/forms/d/14imlD7n7cw4jg4fRjOE3Y5GtNkW3Mkz9n9ERfYooSIo/copy" },
      { "title": "Atividade 11.2", "url": "https://docs.google.com/forms/d/12Jz26PKTXcDaIT7coXP2QLpiKxjP5O2x8PX1JFg_iaI/copy" },
      { "title": "Atividade 11.3", "url": "https://docs.google.com/forms/d/1_GYHf9zBEHI3HZ5F0G6Unj3Ih0v35Z1teWOSI6qwDmE/copy" },
      { "title": "Atividade 11.4", "url": "https://docs.google.com/forms/d/15fXFX62Vsr-oInRrwxzdcn4uBOaq535GxNUfGInMrFI/copy" },
      { "title": "Exercícios do Capítulo 11", "url": "https://docs.google.com/forms/d/1JCcdGmgx307ty1ibA4R7oCLEB0i5WHCf3OdFYzFgBxI/copy" }
    ]
  },
  {
  title: 'Capítulo 12: Como ganhar dinheiro com o celular (sem vendê-lo!)',
  activities: [
    { title: 'Atividade Extra de Nivelamento - Capítulo 12', url: 'https://docs.google.com/forms/d/1b0hoMkLyo4DxzdmnuuMxLFjtrWLW5ByFyhJJ7Y0reGY/copy' },
    { title: 'Atividade 12.1', url: 'https://docs.google.com/forms/d/1g54X5t3LqcP8djId3CL0h742Ne2MLOKA5GYamfs4xGk/copy' },
    { title: 'Atividade 12.2', url: 'https://docs.google.com/forms/d/1YHJDkwaIVa-8JfhgoG7jU_4Q_xVbpIuXzh9tZC7PK1o/copy' },
  ],
},
{
  title: 'Capítulo 13: Relembrando tudo que aprendemos',
  activities: [
    { title: 'Atividade Extra de Nivelamento - Capítulo 13', url: 'https://docs.google.com/forms/d/153bOwKbbyKnclrhjx-CrQdnIRRhU6w_8-KMdFPoGfr4/copy' },
    { title: 'Atividade 13.1', url: 'https://docs.google.com/forms/d/1bG1l_mgAYLB3jiOj6JB4ykcM7kh4eH3Cm_nVO35pKQ8/copy' },
  ],
},
];

export default function Atividades() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 mb-8">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden bg-white transition-all duration-300"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-blue-100 hover:brightness-105"
            onClick={() => toggle(index)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{chapter.title}</h2>
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-5 w-5 text-blue-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
                  {chapter.activities.map((activity, i) => (
                    <Card
                      key={i}
                      className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <CardContent className="p-4">
                        <a
                          href={activity.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
                        >
                          {activity.title}
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
