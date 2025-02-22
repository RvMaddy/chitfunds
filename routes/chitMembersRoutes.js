// backend/routes/chitMembersRoutes.js
import express from 'express';
import {
    createChitMember,
    getAllChitMembers,
    getChitMemberById,
    updateChitMember,
    deleteChitMember
} from '../controllers/chitMembersController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { validateChitMember } from '../middleware/validationMiddleware.js';

const router = express.Router();

/**
 * @desc    Create a new chit member
 * @route   POST /api/chitmembers
 * @access  Private/Admin
 */
router.post('/', protect, admin, validateChitMember, createChitMember);

/**
 * @desc    Get all chit members
 * @route   GET /api/chitmembers
 * @access  Private
 */
router.get('/', protect, getAllChitMembers);

/**
 * @desc    Get chit member by ID
 * @route   GET /api/chitmembers/:id
 * @access  Private
 */
router.get('/:id', protect, getChitMemberById);

/**
 * @desc    Update chit member
 * @route   PUT /api/chitmembers/:id
 * @access  Private/Admin
 */
router.put('/:id', protect, admin, validateChitMember, updateChitMember);

/**
 * @desc    Delete chit member
 * @route   DELETE /api/chitmembers/:id
 * @access  Private/Admin
 */
router.delete('/:id', protect, admin, deleteChitMember);

router.get('/', (req, res) => {
    res.json({ message: 'Chit Members route working' });
});

export default router;  // Make sure to export the router
