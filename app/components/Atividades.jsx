import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

const chapters = [
  {
    title: 'Capítulo 1: Como o dinheiro ajuda a alcançar sonhos?',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 1', url: 'https://docs.google.com/forms/d/1iV6iZzHYEKHkYQH_F2DBK5hcRzJClEPvR7gDhY0YzUc/copy' },
      { title: 'Atividade 1.1', url: 'https://forms.gle/QDeQHZ3DTmrZvPTM6' },
      { title: 'Atividade 1.2', url: 'https://forms.gle/14sPqBEzY289seyM7' },
      { title: 'Atividade 1.3', url: 'https://forms.gle/QwXNwrjWV8yp1a2M6' },
      { title: 'Atividade 1.4', url: 'https://forms.gle/poEPefCsq5SKUroj6' },
      { title: 'Atividade 1.5', url: 'https://forms.gle/HeHbVMR7faz7bAZE8' },
      { title: 'Atividade 1.6', url: 'https://forms.gle/v5DRQRESv1moFQaE7' },
      { title: 'Atividade 1.7', url: 'https://forms.gle/CPumZomZm1V2r5PQ6' },
      { title: 'Exercícios do Capítulo 1', url: 'https://docs.google.com/forms/d/e/1FAIpQLSc2TiU-ILiHWyl9dI7filY2Ux4DOzeEpgXkin1iIC2_h9YEHQ/viewform' },
    ],
  },
  {
    title: 'Capítulo 2: Futuro, aqui vou eu!',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 2', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdB7fe9dGQdX-QLs5EOPtI4jq-e3Zj_aITMytdNRl4lbfrf_w/viewform' },
      { title: 'Atividade 2.1', url: 'https://forms.gle/Kq2984ggon9vn1ao6' },
      { title: 'Atividade 2.2', url: 'https://forms.gle/YUTvGfM9kFfB8Bcs7' },
      { title: 'Atividade 2.3', url: 'https://forms.gle/oWhinNoFUrKCasbp8' },
      { title: 'Atividade 2.4', url: 'https://forms.gle/VNEqJWovaZgMrHM1A' },
      { title: 'Exercícios do Capítulo 2', url: 'https://docs.google.com/forms/d/e/1FAIpQLSejNQQ7Ypdq49fz_EopXRpI2l4OBtjUwMriITjRtROYN8pFuA/viewform' },
    ],
  },
  {
    title: 'Capítulo 3: O que quero? Do que preciso?',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 3', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeB0jYBoXwR_whorGstfIhYVZ8e9yhhxiM5nZ4c5F8a-HWQzQ/viewform' },
      { title: 'Atividade 3.1', url: 'https://forms.gle/xJEkBGeecEUWaF1Z9' },
      { title: 'Atividade 3.2', url: 'https://forms.gle/F87N4XG1NxShGVGN7' },
      { title: 'Atividade 3.3', url: 'https://forms.gle/svzwHogeXc1sVweE9' },
      { title: 'Atividade 3.4', url: 'https://forms.gle/Qfsx5qTS634sHmmK9' },
      { title: 'Exercícios do Capítulo 3', url: 'https://docs.google.com/forms/d/e/1FAIpQLScxOmex6qHFAFVm-Bi63xJjQWgP8kAsZ9i1pZ9YiCvIW04X3A/viewform' },
    ],
  },
  {
    title: 'Capítulo 4: O que ganho e o que gasto',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 4', url: 'https://docs.google.com/forms/d/e/1FAIpQLScMoRR8plPQGMKU8G2yxXwJxOlwLoLs_X3HiYfvc4fT7AffxA/viewform' },
      { title: 'Atividade 4.1', url: 'https://forms.gle/zbrVjPefRWvXV3se6' },
      { title: 'Atividade 4.2', url: 'https://forms.gle/tmp6Pi9QTEvt44p16' },
      { title: 'Atividade 4.3', url: 'https://forms.gle/yM1JyXS4DPh84HXh8' },
      { title: 'Atividade 4.4', url: 'https://forms.gle/rZp9TFCovyXzz3wr8' },
      { title: 'Atividade 4.5', url: 'https://forms.gle/vUthq1Shs8DiZpcT6' },
      { title: 'Exercícios do Capítulo 4', url: 'https://docs.google.com/forms/d/e/1FAIpQLScqiPfcH-7bi8Jp9d8m3Wjd95T7zES21fB62LZMgz-y4j16Tg/viewform' },
    ],
  },
  {
    title: 'Capítulo 5: Pensar antes para consumir melhor',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 5', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdjGYzUgVuw7hH0gnZhihIiq22ugrD5D3ed60SyFw7t5bM1vQ/viewform' },
      { title: 'Atividade 5.1', url: 'https://forms.gle/5H4JTPTQvSipuDgk6' },
      { title: 'Atividade 5.2', url: 'https://forms.gle/vRTDQs1TEpYowpSq9' },
      { title: 'Atividade 5.3', url: 'https://forms.gle/HYWxfyZjAjHj3Ha48' },
      { title: 'Atividade 5.4', url: 'https://forms.gle/mGiFNQN8XYxp4JuR8' },
      { title: 'Exercícios do Capítulo 5', url: 'https://docs.google.com/forms/d/e/1FAIpQLSf8Fw64yyEiq0DW323NCyudUMwkRTCq0A50to3TKbvrgo6iyg/viewform' },
    ],
  },
  {
    title: 'Capítulo 6: O preço do dinheiro',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 6', url: 'https://docs.google.com/forms/d/e/1FAIpQLScrdeJYBYvuhEn7MYFg5tE0oCcmH5loAiPymjPBM496jH_uNA/viewform' },
      { title: 'Atividade 6.1', url: 'https://forms.gle/fgSPhyWaef7PjauBA' },
      { title: 'Atividade 6.2', url: 'https://forms.gle/WKkFV53DdWVz5y1V7' },
      { title: 'Exercícios do Capítulo 6', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdvO5I-64EiEQeCI_jQblnX-bcgdLqqwIGtbUHSB3nkU5PWUA/viewform' },
    ],
  },
  {
    title: 'Capítulo 7: Fazendo o dinheiro render',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 7', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd8Mt-5rWedzmjeoYYwG6-PeNPqnWe6hTNItE1BuDvbaxAhJg/viewform' },
      { title: 'Atividade 7.1', url: 'https://forms.gle/oeJnGNE9iPME9n8J9' },
      { title: 'Atividade 7.2', url: 'https://forms.gle/2d5DWifz8E1eqAG27' },
      { title: 'Atividade 7.3', url: 'https://forms.gle/iYPzv9LB9abCFVTn9' },
      { title: 'Atividade 7.4', url: 'https://forms.gle/YPAyfd94TKVJHPLQ8' },
      { title: 'Exercícios do Capítulo 7', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeNWJA5P_wEIxgO69Jjjc1TspXOw_7Q0-gACVEn3p5egreQrw/viewform' },
    ],
  },

  {
    title: 'Capítulo 8: O que quero ser no futuro',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 8', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdvKnAvQMinecJb5w3dLll7WK00tCd9_0Xm1WJurvyNulDPpw/viewform' },
      { title: 'Atividade 8.1', url: 'https://forms.gle/N6Kda3hzsZArzmWf9' },
      { title: 'Atividade 8.2', url: 'https://forms.gle/J9wrPiesviuiuAHT9' },
      { title: 'Atividade 8.3', url: 'https://forms.gle/3hSnkVUufX2CaJ536' },
      { title: 'Exercícios do Capítulo 8', url: 'https://docs.google.com/forms/d/e/1FAIpQLSd_M8_gUQChrLuYBiDzZuwgsUt9sVa8kq1RbJOS10gkkdanDg/viewform' },
    ],
  },
  {
    title: 'Capítulo 9: Posso trabalhar enquanto estudo?',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 9', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe2z2jtBwcowwfMXTWekFQZqvCMFLW03fDzb-34fqYy2B-d8w/viewform' },
      { title: 'Atividade 9.1', url: 'https://forms.gle/WtR3zwzzipJZKg9n8' },
      { title: 'Atividade 9.2', url: 'https://forms.gle/Zk9eBtMWDx2dePzk8' },
      { title: 'Atividade 9.3', url: 'https://forms.gle/tj4aXdn1UN7m6yTd8' },
      { title: 'Atividade 9.4', url: 'https://forms.gle/DZfk36VyJCfzakUr5' },
      { title: 'Atividade 9.5', url: 'https://forms.gle/MtBqKkCwJvbDdawW7' },
      { title: 'Atividade 9.6', url: 'https://forms.gle/VDqpqHB71ZJaixsf8' },
      { title: 'Atividade 9.7', url: 'https://forms.gle/bpHpbjqditW84skA6' },
      { title: 'Exercícios do Capítulo 9', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfkXio9eAZHOtKcWI-7MNcmFK1CaiSBJeNPajgxt4SX0Ocplw/viewform' },
    ],
  },
  {
    title: 'Capítulo 10: Para onde foi meu dinheiro?',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 10', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfQWZgtaHvjYlT9vE5FNfmNI-gvVcvtpJlasGy67ah67wMVxw/viewform' },
      { title: 'Atividade 10.1', url: 'https://forms.gle/WvWsq1xmfkR2L3qr7' },
      { title: 'Atividade 10.2', url: 'https://forms.gle/cqgTMZwdHoXVYrVG6' },
      { title: 'Atividade 10.3', url: 'https://forms.gle/CmNazrKQTo6BV5qq7' },
      { title: 'Atividade 10.4', url: 'https://forms.gle/d4NHrgS9fuDh2uNdA' },
      { title: 'Atividade 10.5', url: 'https://forms.gle/7vQZpnR48UQM9N5y5' },
      { title: 'Exercícios do Capítulo 10', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfmZ-QpnNAkWOPL5J_HxoXC7_vUuq5XPc7q3_nJEIyqB0SWKw/viewform' },
    ],
  },
  {
    title: 'Capítulo 11: Posso ganhar dinheiro com o meu sonho',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 11', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeKAQGC2YtzLJgFdPsEJbmK2Ple5ITt-lj_556tQ9pnL6mHvQ/viewform' },
      { title: 'Atividade 11.1', url: 'https://forms.gle/GTsUn17EajMHswP86' },
      { title: 'Atividade 11.2', url: 'https://forms.gle/wtXLSsGAidbz5Fow5' },
      { title: 'Atividade 11.3', url: 'https://forms.gle/sKL9N1QzJczGE5Dt9' },
      { title: 'Atividade 11.4', url: 'https://forms.gle/fnwFM7cnyJq12Zsz6' },
      { title: 'Exercícios do Capítulo 11', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdoPL3rp9b5os8vyxUhGgip_N9JYTTsJXGJFn-i2A-WjD1JZQ/viewform' },
    ],
  },
  {
    title: 'Capítulo 12: Como ganhar dinheiro com o celular (sem vendê-lo!)',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 12', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe2E6CTIchfQh-YmISoDbbrSuFk05twcuADJDNLJMCvnU0Ycg/viewform' },
      { title: 'Atividade 12.1', url: 'https://forms.gle/YNXUaFy9L4FSt4Rr5' },
      { title: 'Atividade 12.2', url: 'https://forms.gle/NdLNRJCQv4hVfjteA' },
    ],
  },
  {
    title: 'Capítulo 13: Relembrando tudo que aprendemos',
    activities: [
      { title: 'Atividade Exclusiva Digital - Capítulo 13', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeBz19G5mZ7I8rvQ8V9ndOrLUAxCAgaTog86sHA3RmMOi3icA/viewform' },
      { title: 'Atividade 13.1', url: 'https://forms.gle/FCc2cGb13Qjyaej18' },
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
