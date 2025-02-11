// backend/controllers/chitMembersController.js

let chitMembers = []; // In-memory array simulating a database

// Create a chit_member
export const createChitMember = (req, res) => {
    const { name, age, email } = req.body;

    const newMember = {
        id: chitMembers.length + 1, // Automatically assigning an ID
        name,
        age,
        email,
    };

    chitMembers.push(newMember); // Simulating database insert
    res.status(201).json(newMember); // Returning the newly created member
};

// Get all chit_members
export const getAllChitMembers = (req, res) => {
    res.json(chitMembers); // Simulating database read
};

// Get a chit_member by ID
export const getChitMemberById = (req, res) => {
    const { id } = req.params;
    const member = chitMembers.find((m) => m.id === parseInt(id));

    if (!member) {
        return res.status(404).send('Chit member not found');
    }

    res.json(member);
};

// Update a chit_member
export const updateChitMember = (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    let member = chitMembers.find((m) => m.id === parseInt(id));

    if (!member) {
        return res.status(404).send('Chit member not found');
    }

    // Update member details
    member.name = name;
    member.age = age;
    member.email = email;

    res.json(member);
};

// Delete a chit_member
export const deleteChitMember = (req, res) => {
    const { id } = req.params;
    const index = chitMembers.findIndex((m) => m.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send('Chit member not found');
    }

    chitMembers.splice(index, 1); // Simulating database delete
    res.status(204).send(); // No content to return
};
