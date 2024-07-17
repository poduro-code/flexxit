import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
    }

    try {
        const { email, name, password } = req.body;

        // Validate the presence of required fields
        if (!email || !name || !password) {
            return res.status(422).json({ error: 'Email, name, and password are required' });
        }

        // Check if the user already exists
        const existingUser = await prismadb.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(422).json({ error: 'Email taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the new user
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            },
        });

        return res.status(201).json(user); // 201 Created
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' }); // 500 Internal Server Error
    }
}
