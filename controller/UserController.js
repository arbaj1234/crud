import Usermodel from "../model/userSchema.js"

export const createuser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).send({
                success: false,
                message: 'please provide all required fields'
            })
        }
        const user = await Usermodel.create({
            name, email, password
        })
        res.status(200).json({
            success: true,
            message: 'user create successfully',
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in create userAll API'
        })
    }
}


export const getAlluser = async (req, res) => {
    try {
        const user = await Usermodel.find();
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'getAlluser success',
            user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in GET all API'
        })
    }
}

export const getAlluserbyid = async (req, res) => {
    try {
        const user = await Usermodel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'user fatch successfully',
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in GETByid API'
        })
    }
}

export const updateuser = async (req, res) => {
    try {
        const user = await Usermodel.findByIdAndUpdate(req.params.id)
        if (!user) {
            return res.status(404).json({
                sucess: false,
                message: 'User not found'
            })

        }
        const { name, email, password } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;
        await user.save();
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in Update all API'
        })
    }
}

export const deleteuser = async (req, res) => {
    try {
        const user = await Usermodel.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({
                sucess: false,
                message: 'User not found'
            })

        }
        res.status(200).json({
            success: true,
            message: 'User delete successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in delete API'
        })
    }
}