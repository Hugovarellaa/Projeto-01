import { Router } from "express";
import { SettingsController } from "./Controller/SettingsController";

const route = Router();

const settingsController = new SettingsController();

route.post("/settings", settingsController.create);

export { route };
