"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../middlewares/auth");
var ManifestsRoutes = express_1.Router();
var manifests_controller_1 = __importDefault(require("../controllers/manifests.controller"));
var mars_controller_1 = __importDefault(require("../fixtures/mars.controller"));
ManifestsRoutes.get("/", manifests_controller_1.default.getAllManifests);
ManifestsRoutes.get("/date/:date", manifests_controller_1.default.findOneManifest);
ManifestsRoutes.get("/sol/:sol", manifests_controller_1.default.findOneManifest);
ManifestsRoutes.get("/cams", manifests_controller_1.default.findByCams);
ManifestsRoutes.post("/sync", auth_1.verifyJWT, mars_controller_1.default.sync_manifests);
exports.default = ManifestsRoutes;