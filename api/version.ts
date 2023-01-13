import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (request: VercelRequest, response: VercelResponse) => {
  return response.status(200).json({
    tag_name: process.env.VERVEL_TAG_NAME,
    notices: ['本项目开源且免费，文档地址 https://b.2024666.xyz'],
  });
};
