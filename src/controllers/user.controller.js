import { promiseHandler } from "../utils/promiseHandler.js";

const registerUser = promiseHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "User registered successfully"
    });
})

export { registerUser };