export const validateId = (req, res, next) => {
    const id = req.params.id;
    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ message: "Parameter 'id' must be an integer" });
    }
    next();
};

export default validateId;