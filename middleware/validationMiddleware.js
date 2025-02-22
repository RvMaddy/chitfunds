import { check, validationResult } from 'express-validator';

export const validateChitMember = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),

    check('phoneNumber')
        .trim()
        .notEmpty()
        .withMessage('Phone number is required')
        .matches(/^[0-9]+$/)
        .withMessage('Phone number must contain only numbers'),

    check('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format')
        .normalizeEmail(),

    check('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required'),

    check('status')
        .optional()
        .isIn(['ACTIVE', 'INACTIVE', 'SUSPENDED'])
        .withMessage('Invalid status value'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]; 