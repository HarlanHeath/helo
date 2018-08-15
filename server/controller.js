module.exports = {
    newUser:(req,res,next) => {
        const dbInstance = req.app.get("db");
        dbInstance.create_user(req.params.)
    }
};
