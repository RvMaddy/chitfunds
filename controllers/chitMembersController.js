// backend/controllers/chitMembersController.js

import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

// @desc    Create a chit member
// @route   POST /api/chitmembers
// @access  Private/Admin
export const createChitMember = asyncHandler(async (req, res) => {
    const { name, phoneNumber, email, address } = req.body;

    const chitMember = await prisma.chitMember.create({
        data: {
            name,
            phoneNumber,
            email,
            address
        }
    });

    res.status(201).json(chitMember);
});

// @desc    Get all chit members
// @route   GET /api/chitmembers
// @access  Private
export const getAllChitMembers = asyncHandler(async (req, res) => {
    const chitMembers = await prisma.chitMember.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    res.json(chitMembers);
});

// @desc    Get a chit member by ID
// @route   GET /api/chitmembers/:id
// @access  Private
export const getChitMemberById = asyncHandler(async (req, res) => {
    const chitMember = await prisma.chitMember.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });

    if (!chitMember) {
        res.status(404);
        throw new Error('Chit member not found');
    }

    res.json(chitMember);
});

// @desc    Update a chit member
// @route   PUT /api/chitmembers/:id
// @access  Private/Admin
export const updateChitMember = asyncHandler(async (req, res) => {
    const { name, phoneNumber, email, address, status } = req.body;

    const chitMember = await prisma.chitMember.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            name,
            phoneNumber,
            email,
            address,
            status: status ? status.toUpperCase() : undefined
        }
    });

    if (!chitMember) {
        res.status(404);
        throw new Error('Chit member not found');
    }

    res.json(chitMember);
});

// @desc    Delete a chit member
// @route   DELETE /api/chitmembers/:id
// @access  Private/Admin
export const deleteChitMember = asyncHandler(async (req, res) => {
    try {
        await prisma.chitMember.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).send();
    } catch (error) {
        res.status(404);
        throw new Error('Chit member not found');
    }
});
