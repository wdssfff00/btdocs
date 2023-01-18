import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (_request: VercelRequest, response: VercelResponse) => {
  return response.status(200).json({
    tag_name: Math.max(process.env.VERVEL_TAG_NAME, 'v0.23.0118'),
    notice: {
      common: ['本项目开源且免费，文档地址 https://b.2024666.xyz'],
      scf: [],
      fc: [],
      agc: [],
      cfc: [],
      fg: [],
    },
  });
};
