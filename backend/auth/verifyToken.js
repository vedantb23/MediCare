import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;
    
    if(!authToken || !authToken.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access'
        });
    }

    try {
        // console.log("authToken", authToken);
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role= decoded.role;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: 'Token has expired'
            });
        }
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }

}

export const restrict = (roles) => async (req, res, next) => {
    const { userId, role } = req;

    let user;
        if (role === 'doctor') {
            user = await Doctor.findById(userId);
        } else if (role === 'user') {
            user = await User.findById(userId);
        }

        if(!roles.includes(user.role)) {
            return res.status(403).json({
                success: false,
                message: 'Forbidden: You do not have permission to access this resource'
            });
        }

        req.user = user;
        next();
}