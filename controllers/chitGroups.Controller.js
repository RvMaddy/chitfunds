import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Chit Group
export const createChitGroup = async (req, res) => {
    try {
        const { group_name, total_amount, monthly_amount, start_date, end_date, created_by, tenure, no_of_members, chit_collector, bid_type, minimum_bid_percentage, no_of_installments, maximum_bid_percentage } = req.body;

        const newGroup = await prisma.chit_groups.create({
            data: {
                group_name,
                total_amount,
                monthly_amount,
                start_date: new Date(start_date),
                end_date: new Date(end_date),
                created_by,
                tenure,
                no_of_members,
                chit_collector,
                bid_type,
                minimum_bid_percentage,
                no_of_installments,
                maximum_bid_percentage,
            },
        });

        res.status(201).json(newGroup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Chit Groups
export const getChitGroups = async (req, res) => {
    try {
        const groups = await prisma.chit_groups.findMany();
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Chit Group by ID
export const getChitGroupById = async (req, res) => {
    try {
        const { id } = req.params;
        const group = await prisma.chit_groups.findUnique({ where: { group_id: Number(id) } });

        if (!group) return res.status(404).json({ message: "Chit Group not found" });

        res.status(200).json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Chit Group
export const updateChitGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedGroup = await prisma.chit_groups.update({
            where: { group_id: Number(id) },
            data,
        });

        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Chit Group
export const deleteChitGroup = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.chit_groups.delete({
            where: { group_id: Number(id) },
        });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
