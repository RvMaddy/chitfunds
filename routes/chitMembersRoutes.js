// backend/routes/chitMembersRoutes.js
import { createChitMember, getAllChitMembers, getChitMemberById, updateChitMember, deleteChitMember } from '../controllers/chitMembersController.js';

import express from 'express';
const router = express.Router();

// Define routes
router.post('/', createChitMember);
router.get('/', getAllChitMembers);
router.get('/:id', getChitMemberById);
router.put('/:id', updateChitMember);
router.delete('/:id', deleteChitMember);

export default router;  // Make sure to export the router
