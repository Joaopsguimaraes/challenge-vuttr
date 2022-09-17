import { Request, Response, Router } from "express";

import { prisma } from "../prisma/client";

export const toolsRouter = Router();

toolsRouter.post("/", async (req: Request, res: Response) => {
  const { id, title, description, tags, url } = req.body;
  const tagsFormatted = tags.replace(/\s/g, '')
  const tools = await prisma.tools.create({
    data: {
      id,
      title,
      description,
      tags: tagsFormatted,
      url,
    },
  });

  return res.status(201).json(tools);
});

toolsRouter.get("/", async (req: Request, res: Response) => {
  const tools = await prisma.tools.findMany({});

  return res.json(tools);
});

toolsRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const tools = await prisma.tools.findUnique({
    where: {
      id,
    },
  });

  return res.json(tools);
});

toolsRouter.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, url, description, tags } = req.body;

  const tools = await prisma.tools.update({
    data: {
      title,
      url,
      description,
      tags
    },
    where: {
      id,
    },
  });

  return res.json(tools);
});

toolsRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const tools = await prisma.tools.delete({
    where: {
      id,
    },
  });
  return res.json(tools);
});

toolsRouter.get("/:title", async (req: Request, res: Response) => {
  const { title } = req.params;
  const tools = await prisma.tools.findMany({ 
    where: {
      title,
    },
  });
  return res.json(tools);
});
