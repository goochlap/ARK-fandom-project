import { Response, Request, NextFunction } from 'express';
import Dinosaur from './dinosaur.model';

export const getDinosaurs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaurs = await Dinosaur.find();

    res.status(200).json({ success: true, data: dinosaurs });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const getDinosaur = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaur = await Dinosaur.findById(req.params.id);

    if (!dinosaur) {
      return res.status(404).json({
        success: false,
        message: `dinosaur with id ${req.params.id} not found`,
      });
    }

    res.status(200).json({ success: true, data: dinosaur });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const createDinosaur = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaur = await Dinosaur.create(req.body);

    res.status(201).json({ success: true, data: dinosaur });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const updateDinosaur = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaur = await Dinosaur.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!dinosaur) {
      return res.status(404).json({
        success: false,
        message: `dinosaur with id ${req.params.id} not found`,
      });
    }

    res.status(200).json({ success: true, data: dinosaur });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};

export const deleteDinosaur = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaur = await Dinosaur.findByIdAndDelete(req.params.id);

    if (!dinosaur) {
      return res.status(404).json({
        success: false,
        message: `dinosaur with id ${req.params.id} not found`,
      });
    }

    res.status(204);
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
};
