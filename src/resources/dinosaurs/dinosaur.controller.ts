import { RequestHandler } from 'express';

export const getDinosaurs: RequestHandler = async (
  req,
  res,
  next
): Promise<Response | void> => {
  res.status(200).json({ success: true, data: 'get all dinosaurs' });
};

export const getDinosaur: RequestHandler = async (
  req,
  res,
  next
): Promise<Response | void> => {
  res.status(200).json({ success: true, data: 'get one dinosaur' });
};

export const createDinosaur: RequestHandler = async (
  req,
  res,
  next
): Promise<Response | void> => {
  res.status(200).json({ success: true, data: 'create dinosaur' });
};

export const updateDinosaur: RequestHandler = async (
  req,
  res,
  next
): Promise<Response | void> => {
  res.status(200).json({ success: true, data: 'update dinosaur' });
};

export const deleteDinosaur: RequestHandler = async (
  req,
  res,
  next
): Promise<Response | void> => {
  res.status(200).json({ success: true, data: 'delete a dinosaur' });
};
