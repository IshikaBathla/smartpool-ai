const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({
            message: "User Created Successfully",
            user,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal Server Error",
        });

    }
};

module.exports = {
    signup,
};