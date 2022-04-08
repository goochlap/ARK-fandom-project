import { Response, Request, NextFunction } from 'express';
import Dinosaur from './dinosaur.model';
import ErrorResponse from '@/utils/error.response';
import logger from '@/middleware/logger';

export const getDinosaurs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const dinosaurs = await Dinosaur.find();

    res.status(200).json({ success: true, data: dinosaurs });
  } catch (error) {
    next(error);
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
      return next(
        new ErrorResponse(`dinosaur with id ${req.params.id} not found`, 404)
      );
    }

    res.status(200).json({ success: true, data: dinosaur });
  } catch (error) {
    next(error);
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
    next(error);
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
      return next(
        new ErrorResponse(`dinosaur with id ${req.params.id} not found`, 404)
      );
    }

    res.status(200).json({ success: true, data: dinosaur });
  } catch (error) {
    next(error);
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
      return next(
        new ErrorResponse(`dinosaur with id ${req.params.id} not found`, 404)
      );
    }

    res.status(204).json({ success: true });
  } catch (error) {
    next(error);
  }
};
